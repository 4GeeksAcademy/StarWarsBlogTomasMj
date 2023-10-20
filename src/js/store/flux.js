import React, { useState, useEffect, useContext } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets: [],
			starships:[],
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
			
		}
	};
};

export default getState;
