import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import CommentCard from '../components/CommentCard';
import styles from './PostDetailsScreen.styles';

export default function PostDetailsScreen({ route }) {
  const { post } = route.params;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.userName)}&background=1565c0&color=fff&size=128`;

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/posts/${post.id}/comments`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <View style={styles.postContainer}>
              <View style={styles.userRow}>
                <Image source={{ uri: avatarUrl }} style={styles.avatar} />
                <Text style={styles.userName}>{post.userName}</Text>
              </View>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.body}>{post.body}</Text>
            </View>

            <Text style={styles.commentsTitle}>Comments</Text>

            {loading && (
              <View style={styles.commentsLoading}>
                <ActivityIndicator size="small" color="#1565c0" />
                <Text style={styles.commentsLoadingText}>Loading comments...</Text>
              </View>
            )}

            {!loading && comments.length === 0 && (
              <View style={styles.emptyComments}>
                <Text style={styles.emptyCommentsText}>No comments yet</Text>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <CommentCard comment={item} />
        )}
      />
    </View>
  );
}