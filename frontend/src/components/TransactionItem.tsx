import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TransactionItemProps {
  amount: number;
  sender: string;
  date: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ amount, sender, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 14,
    color: 'green',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});

export default TransactionItem;