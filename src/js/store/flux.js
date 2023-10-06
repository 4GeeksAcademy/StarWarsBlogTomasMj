import React, { useState, useEffect, useContext } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],

			planets: [],
			starships:[],
			message: "Inicializando desde flux",
			nombresCambiados: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			addFavorite: (fav) => {
				const store = getStore();
				const actions = getActions(); 
				if(store.favorites.includes(fav)){
					// actions.deleteFavorite(fav)
				}else{
					setStore({
						favorites: [...getStore().favorites, fav]
					})
				}	
			},

			deleteFavorite: (fav) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter((item) => item !== fav)
				})
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				
				console.log("load some data funciona");
				fetch("https://swapi.dev/api/people") 
				.then((res) => res.json())
				// .then((data) => console.log(data.results))
				.then((data) => setStore({ characters: data.results }))
				
				fetch("https://swapi.dev/api/planets") 
				.then((res) => res.json())
				// .then((data) => console.log(data.results))
				.then((data) => setStore({ planets: data.results }))
				
				fetch("https://swapi.dev/api/starships") 
				.then((res) => res.json())
				// .then((data) => console.log(data.results))
				.then((data) => setStore({ starships: data.results }))
				

				
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
