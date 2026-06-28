import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CommentCard.styles';

export default function CommentCard({ comment }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=42a5f5&color=fff&size=128`;

  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.userName}>{comment.name}</Text>
      </View>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
}