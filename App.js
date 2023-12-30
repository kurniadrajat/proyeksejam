import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList,Dimensions,Image  } from 'react-native';

const Header = ({}) => {
  return (
    <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.username}>This is Cogil</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2023/09/12/satria-mahathir-9.jpeg?w=829' }}
        />
      </View>
  );
};

const CustomerCard = ({ name, balance }) => {
  const cardStyle = {
    ...styles.card,
    borderColor: balance >= 0 ? 'green' : 'red',
    shadowColor: balance >= 0 ? 'green' : 'red',
  };

  const balanceTextStyle = {
    ...styles.balanceText,
    color: balance >= 0 ? 'green' : 'red',
  };

  return (
    <View style={cardStyle}>
      <View style={styles.customerInfoContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2023/09/12/satria-mahathir-9.jpeg?w=829' }} style={styles.avatar} />
        </View>
        <View style={styles.customerTextContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={balanceTextStyle}>{`Balance: ${balance}`}</Text>
        </View>
      </View>
    </View>
  );
};

const AccountBalanceCard = ({ accountName, totalBalance, accounts }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <View style={styles.accountBalanceCard}>
          <Text style={styles.accountName}>{accountName}</Text>
          <Text style={styles.totalBalance}>{`Total Balance: ${totalBalance}`}</Text>
          {accounts.map((account) => (
            <CustomerCard name={account.name} balance={account.balance} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const NewCard = () => {
  // Contoh data untuk kartu baru
  const newData = [
    { title: 'Account 1', value: 50 },
    // ...Tambahkan data lainnya sesuai kebutuhan
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <View style={styles.newCard}>
          <Text style={styles.newCardTitle}>Balance</Text>
          {newData.map((data) => (
            <View style={styles.newCardItem}>
              <Text style={styles.totalBalanceHeader}>{`$ ${data.value}`}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.cardContainer}>
      <View style={styles.newCard}>
          <Text style={styles.newCardTitle}>VISA</Text>
          <Text style={styles.nokartu}>7312 7834 7128 1293 3839</Text>
          <Text style={styles.newCardTitle}>EXP 03/09              CVV 256</Text>
        </View>
      </View>
      <View style={styles.newCard}>
          <Text style={styles.newCardTitle}>Balance 2</Text>
          {newData.map((data) => (
            <View style={styles.newCardItem}>
              <Text style={styles.totalBalanceHeader}>{`$ ${data.value}`}</Text>
            </View>
          ))}
      </View>
      <View style={styles.newCard}>
          <Text style={styles.newCardTitle}>VISA</Text>
          <Text style={styles.nokartu}>7312 7834 7128 1293 3839</Text>
          <Text style={styles.newCardTitle}>EXP 03/09              CVV 256</Text>
      </View>
    </ScrollView>
  );
};

const HomePage = () => {
  const username = 'This is Cogil'; // Ganti dengan username sesuai kebutuhan
  const accounts = [
    [
      { name: 'Arjuna Ciso', balance: 1000 },
      { name: 'Atiko Cobol', balance: -500 },
      { name: 'Rasid Architecture', balance: 200 },
      { name: 'Versa PMO', balance: 1000 },
      { name: 'Debt Collector', balance: -500 },
      { name: 'Arjuna Ciso', balance: 1000 },
      { name: 'Atiko Cobol', balance: -500 },
      { name: 'Rasid Architecture', balance: 200 },
      { name: 'Versa PMO', balance: 1000 },
      { name: 'Debt Collector', balance: -500 },
    ],
    // ...Tambahkan grup account lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <Header username={username} />
      <ScrollView>
        <NewCard />
        {accounts.map((account) => (
          <AccountBalanceCard
            accountName={`History`}
            totalBalance={account.reduce((total, customer) => total + customer.balance, 0)}
            accounts={account}
          />
        ))}
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
  },
  totalBalanceHeader:{
    fontSize: 30,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  customerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // Setengah dari lebar/h tinggi untuk membuatnya berbentuk lingkaran
  },
  headerTextContainer: {
    flex: 1,
  },
  customerTextContainer: {
    flex: 1,
  },
  nokartu:{
    padding:20,
    paddingLeft:2

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginTop: 20,
    marginLeft:170
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    alignSelf: 'flex-start',
    color:'white'

  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10
  },
  rightContainer: {
    marginLeft: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  
  cardContainer: {
    flexDirection: 'row',
  },
  accountBalanceCard: {
    borderColor:'white',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    marginRight: 8,
    width: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white'
  },
  totalBalance: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color:'white'
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    width: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white'
  },
  balanceText: {
    fontSize: 16,
    
  },
  newCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    marginRight: 8,
    width: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  newCardTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  newCardItem: {
    marginBottom: 8,
  },
});

export default HomePage;
