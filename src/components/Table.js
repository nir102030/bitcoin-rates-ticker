import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Table = ({data, columnTitles}) => {
  const renderColumnTitles = () => {
    return columnTitles.map((title, index) => {
      const styleName = `cell${index + 1}`;
      return (
        <View
          key={index}
          style={[styles[styleName], {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
          <Text style={{color: 'white'}}>{title}</Text>
        </View>
      );
    });
  };

  const renderRow = (row, index) => {
    const backgroundColor =
      index % 2 == 0 ? 'rgb(255,255,255)' : 'rgba(0,0,0,0.1)';
    return (
      <View key={index} style={styles.row}>
        <View style={[styles.cell1, {backgroundColor: backgroundColor}]}>
          <Text>{row.id}</Text>
        </View>
        <View style={[styles.cell2, {backgroundColor: backgroundColor}]}>
          <Text>{row.userId}</Text>
        </View>
        <View style={[styles.cell3, {backgroundColor: backgroundColor}]}>
          <Text>{row.title}</Text>
        </View>
      </View>
    );
  };

  const renderRows = () => {
    return data.map((row, index) => {
      return renderRow(row, index);
    });
  };

  return (
    <>
      <View style={styles.row}>{renderColumnTitles()}</View>
      {renderRows()}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },

  cell1: {
    flex: 1,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderStartWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell2: {
    flex: 2,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderStartWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell3: {
    flex: 3,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
});

export default Table;
