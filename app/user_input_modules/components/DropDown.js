import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({ name, mainValue, handleInputChange, items, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [itemsList, setItemsList] = useState(items);

  return (
    <DropDownPicker
      style={styles.container}
      open={open}
      value={value}
      items={itemsList}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItemsList}
      onChangeValue={(itemValue) => handleInputChange(name, itemValue)}
      selectedValue={mainValue}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 45,
    width: 340,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 16,
  },
});

export default Dropdown;
