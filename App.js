// imports
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



// the default app
export default function App() {
  // states in hooks
  let menuNav = useRef(null);

  useEffect( () => {

    if (menuNav.current === true /**true */) {
      // display menu
      menuNav.current.setNativeProps({
        style: {
          display: 'block',
        },
      })
    } else if (menuNav.current === null) {
      menuNav.current.setNativeProps({
        style: {
          display: 'none',
        }
      })
    }

  }, [menuNav])

  // custom buttons
  const MenuButton = ( {title, onPress} ) => (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Icon name="bars" size={30} color="#900" />
    </TouchableOpacity>
  )

  const NavLinks = ( { title, onPress } ) => (
    <TouchableOpacity style={styles.navLinks} onPress={onPress}>
      <Text>{ title }</Text>
    </TouchableOpacity>
  )

  // toggle menu
  const CheckMenu = menuCount => {
      if (menuNav.current === null) {
        // if false then set it to true
        menuNav.current = Boolean(true);
        return;
      }
      // else return it to default null
      menuNav.current = null;
      return true;
    }
  
  const NavLink = () => {
  }
  
    return (
      <SafeAreaView style={styles.safeArea}>
        {/**this is the default area view */}
  
        {/* topnav */}
        <View style={styles.topNav}>
          {/* menu button*/}
          <MenuButton title='Menu' onPress={CheckMenu} />
  
          {/* company name */}
          <Text style={styles.companyName}>Retro Classics</Text>
  
          {/* logins */}
          <View style={styles.credential}>
            <Icon name="user" size={30} color="#900" />
          </View>
        </View>
  
        {/* menu nav */}
        <View style={styles.menuDiv} id="menuDiv" ref={menuNav}>
          <NavLinks title="Home" onPress={NavLink} />
          <NavLinks title="Contacts" onPress={NavLink} />
          <NavLinks title="Feedback" onPress={NavLink} />
        </View>
  
        <StatusBar style="auto" />
      </SafeAreaView>
  )

}


// styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(220, 220, 220)',
  },
  topNav: {
    backgroundColor: 'rgb(220, 220, 220)',
    width: '100%',
    marginTop: '12.5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  menuButton: {
    backgroundColor: 'rgb(35, 35, 35)',
    borderRadius: 7.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
  },
  companyName: {
    fontSize: 15,
  },
  credential: {
    backgroundColor: 'rgb(35, 35, 35)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7.5,
  },
  menuDiv: {
    position: 'absolute',
    width: '95%',
    top: '0',
    height: '90%',
    marginTop: '12.5%',
    backgroundColor: 'rgb(220, 220, 220)',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    display: 'none',
  }

})