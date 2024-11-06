// frontend/screens/OverviewScreen.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: '#1E90FF', // Blue color for the link
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#349923', // Green color for button background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#ffffff', // White text for button
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
