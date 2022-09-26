/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   firebase.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adiouane <adiouane@student.1337.ma>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/09/24 17:41:16 by adiouane          #+#    #+#             */
/*   Updated: 2022/09/25 01:18:00 by adiouane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const firebaseConfig = {
    apiKey: "AIzaSyDvk1_lrqYq0GkdxmnPm7cLjvpSuhvPaR4",
    authDomain: "to-do-list--adiouane.firebaseapp.com",
    projectId: "to-do-list--adiouane",
    storageBucket: "to-do-list--adiouane.appspot.com",
    messagingSenderId: "994593568986",
    appId: "1:994593568986:web:fbfb5af00f87fdd5854de3",
    measurementId: "G-H66M55YSXC"
  };

  // Initialize Firebase
  
//   firebase.analytics();
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();