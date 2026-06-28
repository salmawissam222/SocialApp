import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#1565c0',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1565c0',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1565c0',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  commentsLoading: {
    alignItems: 'center',
    marginTop: 12,
  },
  commentsLoadingText: {
    fontSize: 14,
    color: '#888',
    marginTop: 6,
  },
  emptyComments: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  emptyCommentsText: {
    fontSize: 14,
    color: '#aaa',
  },
  listContent: {
    paddingBottom: 40,
  },
});

export default styles;