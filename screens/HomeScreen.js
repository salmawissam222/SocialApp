import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import PostCard from '../components/PostCard';
import styles from './HomeScreen.styles';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/posts');
      const data = await response.json();

      const postsWithUsers = await Promise.all(
        data.map(async (post) => {
          try {
            const userResponse = await fetch(`https://gorest.co.in/public/v2/users/${post.user_id}`);
            const user = await userResponse.json();
            return { ...post, userName: user.name || 'Unknown User' };
          } catch {
            return { ...post, userName: 'Unknown User' };
          }
        })
      );

      setPosts(postsWithUsers);
    } catch (error) {
      console.log('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1565c0" />
        <Text style={styles.loadingText}>Loading posts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetails', { post: item })}
          />
        )}
      />
    </View>
  );
}