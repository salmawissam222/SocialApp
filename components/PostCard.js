import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PostCard.styles';

export default function PostCard({ post, onPress }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.userName)}&background=1565c0&color=fff&size=128`;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.userRow}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.userName}>{post.userName}</Text>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body} numberOfLines={2}>{post.body}</Text>
    </TouchableOpacity>
  );
}