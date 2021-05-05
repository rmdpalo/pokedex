# pokedex
A simple pokedex app that utilizes PokeAPI to allow users to search for pokemon using their name or their pokemon number.

**Disclaimer**
- Current app only works up to generation VII (i.e. id# 1-809), you can enter Pokémon names and id's after generation VII but it's not guaranteed to work with our app. 
- Has issues rendering pokemon with multiple words (i.e. Type-null, Aegislash-shield, and any pokemon with male/female variants)
## Tech Stack:
- React (both class and functional components)
- PokeAPI
- Styled Components

## Components:
- Search bar
- Search button
- Scroll wheel (arrows clickable)
- Display
- Container
- Ditto button

### Search component:
- Type in pokemon # or FULL NAME.
- Click the magnifying glass to search (enter?)
- Placeholder: “Please enter a pokemon name or number”
- State: user’s input?

### Scroll Wheel component:
- Scroll wheel on the right moves us sequentially through pokemon
- Up and down arrows are clickable
- (initialize to state? currentNum? Other option is to just set the # within the pokemon object)
- Ability to loop through Pokémon id# 1-809
- Icebox: mousewheel event? up and down arrow keys?

### Pokemon display component:
- Displays pokemon logo on mount
- Display pokemon #, name, height, weight, type after search
- If blank/error: pokemon not found try again.

### Ditto button: 
- Single click: randomizes pokemon displayed (random number generator)
- Icebox: double click? displays ditto’s information

### Container: 
-Just holds everything

### First thoughts on state:
- Based on what we talked about this is an educated guess on what our state would look like.
```
this.state={
  userInput: “”,
  data: {
    id: 0,
    name: “”,
    height: “”,
    weight: “”,
    type: {
      0: { //this could be an array if multiple types
        type: {
          name: “”,
        },
      },
    },
  },
}
```

### Need to figure out:
-How to get a photo/sprite of the pokemon
-Convert promises to async await

### Icebox:
- Sega cheat code => display our information.







