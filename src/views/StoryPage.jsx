import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Story from '../components/Story';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid, Container, List, ListItem, IconButton, ListItemText, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    margin: '20px 0',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function StoryPage() {
  const classes = useStyles();
  const { storyId } = useParams();
  const [currentNode, setCurrentNode] = useState(null);
  const [storyNodes, setStoryNodes] = useState([]);

  useEffect(() => {
    const stories = {
      1: {
        title: 'The Dark Forest',
        author: 'John Doe',
        coverImage: '/assets/black.jpeg',
        startNode: {
          id: 1,
          text: 'You find yourself deep in the heart of a dark, ominous forest, with towering trees that block out almost all the light. The air is thick with the smell of moss and damp earth, and the occasional sound of rustling leaves keeps you on edge. As you glance around, you notice that the forest seems to stretch endlessly in all directions, except for two faintly visible paths in front of you. The left path looks well-trodden, the ground beneath it worn and soft from what must have been years of travelers. The right path, however, is covered in thorny vines, almost as if nature itself is trying to keep people away. You feel a chill run down your spine as you contemplate your decision. Should you take the path that many before you have taken, or will you brave the unknown?',
          choices: [
            { text: 'Take the left path', nextNode: 2 },
            { text: 'Take the right path', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You cautiously step onto the left path, and as you move forward, the atmosphere begins to shift. The dense canopy above gradually gives way, allowing faint rays of sunlight to pierce through, casting long shadows on the forest floor. The deeper you venture, the quieter it becomes, until the only sound you can hear is your own footsteps. After walking for what feels like hours, you stumble upon an ancient, moss-covered chest hidden beneath the roots of a massive oak tree. You kneel down and wipe away the dirt and moss, revealing intricate carvings that suggest this chest has been here for centuries. Could it contain treasure? Or is it better left unopened?',
            choices: [{ text: 'Open the treasure chest', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'The moment you step onto the right path, you realize that this journey will not be easy. The thorny vines tug at your clothing, and the ground beneath your feet is uneven, making each step a struggle. As you push forward, the air around you grows colder, and the eerie silence is broken only by the occasional rustle of unseen creatures in the underbrush. Suddenly, you find yourself standing face-to-face with a massive dragon, its scales shimmering in the dim light. The beast lets out a low growl, smoke curling from its nostrils as it glares down at you with piercing eyes. You have only seconds to decide — will you face the dragon in battle, or try to flee before it strikes?',
            choices: [{ text: 'Fight the dragon', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'You carefully pry open the chest, the hinges creaking loudly as if they havent been disturbed in centuries. Inside, your eyes widen as you see piles of gold coins, sparkling jewels, and strange artifacts that seem almost too valuable to be real. As you lift a golden goblet from the pile, you feel a sense of triumph, knowing that this treasure could change your life forever. However, you also feel a strange unease — could there be a curse that comes with this newfound wealth? Regardless, for now, you have won this part of the adventure. The forest may still hold many secrets, but you leave with more than you ever imagined.',
            choices: [],
          },
          {
            id: 5,
            text: 'With adrenaline pumping through your veins, you grip your weapon tightly and charge at the dragon. The ground shakes beneath your feet as the beast lets out a deafening roar and unleashes a stream of fire in your direction. You dodge the flames, feeling the intense heat as they singe the air around you. For what feels like an eternity, you engage in a fierce battle, dodging, striking, and avoiding the dragons deadly attacks. Finally, with one well-timed strike, you manage to wound the dragon, forcing it to retreat into the shadows of the forest. Exhausted but alive, you realize that you have narrowly escaped death. Though the dragon is gone for now, you know it may return, and the forest still holds many more dangers.',
            choices: [],
          },
          {
            id: 6,
            text: 'You find a secret tunnel. Where does it lead?',
            choices: [],
          },
        ],
      },
      2: {
        title: 'The Haunted Mansion',
        author: 'Jane Smith',
        coverImage: '/assets/horse.jpeg',
        startNode: {
          id: 1,
          text: 'The once grand and stately mansion looms before you, its towering turrets and weathered stone walls casting long shadows in the fading light of dusk. Once a symbol of wealth and power, it now stands as a haunting relic of the past. Windows, long shattered, gape like hollow eyes, and vines have crept up the sides, as though nature itself is trying to reclaim the forsaken building. A chill hangs in the air, sending shivers down your spine, but you can’t shake the curiosity that has drawn you here. They say no one who enters the mansion comes out the same — if they come out at all. As you stand at the front gates, you spot two possible entrances: the grand front door, once used by noble guests, or a small side door that appears partially ajar. The mansion calls to you, but which way will you answer?',
          choices: [
            { text: 'Enter through the front door', nextNode: 2 },
            { text: 'Enter through the side door', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You decide to approach the front door, its massive, intricately carved surface now faded and weather-beaten. With a deep breath, you push the heavy door open, its creaking hinges echoing through the grand foyer. Inside, the mansion’s former glory is still evident. A grand chandelier, caked in dust, hangs precariously from the ceiling, casting eerie shadows over the faded wallpaper and tattered curtains. In the center of the room, a grand staircase winds up into darkness, its bannister adorned with cobwebs. As you step deeper inside, the door slams shut behind you with a deafening thud. You turn, heart pounding, but there’s no one there. You notice two hallways branching off — one to the east, where a faint light flickers, and another to the west, where the air feels colder, almost oppressive. Which path will you choose?',
            choices: [
              { text: 'Go down the east hallway', nextNode: 4 },
              { text: 'Go down the west hallway', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Steeling your nerves, you slip through the side door, the rusted hinges groaning as it opens just wide enough for you to squeeze through. You find yourself in a narrow, dimly lit corridor, the air thick with dust and the musty smell of decay. The wallpaper is peeling, and the floorboards creak beneath your feet as you make your way forward. As you move deeper into the mansion, you notice strange markings scratched into the walls — symbols you can’t quite make out, but that fill you with an inexplicable sense of dread. Suddenly, a low, whispering voice echoes from somewhere ahead, beckoning you further. Your heart races, and you pause. Before you is a winding staircase leading down into the cellar, while to your right, a door creaks open slightly, revealing what appears to be an old study. What will you do?',
            choices: [
              { text: 'Descend into the cellar', nextNode: 6 },
              { text: 'Enter the study', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'You move cautiously down the east hallway, following the faint flicker of light. As you approach, the light grows stronger, revealing a dusty, neglected room at the end of the hall. Inside, you find an old oil lamp sitting on a table, its dim flame casting long, wavering shadows on the walls. Beside it, a large portrait hangs crooked on the wall — a regal woman in period clothing, her expression stern, her eyes almost lifelike. Beneath the portrait is a dusty old journal, its cover worn and fragile with age. You feel drawn to the journal, as though it holds the answers to the mansion’s many secrets. But just as you’re about to open it, you hear the unmistakable sound of footsteps echoing from somewhere deeper in the mansion. Someone — or something — is coming. What will you do?',
            choices: [
              { text: 'Descend into the cellar', nextNode: 5 },
              { text: 'Enter the study', nextNode: 4 },
            ],
          },
          {
            id: 5,
            text: 'The moment you step into the west hallway, the temperature drops noticeably, and you can see your breath in the cold air. The walls here are lined with dusty, old portraits of people long gone — their expressions dark and unforgiving. As you continue forward, the faint sound of a music box playing a haunting melody drifts through the air, though you can’t quite place its source. The hallway seems to stretch on forever, twisting and turning in ways that defy logic. You begin to feel disoriented, unsure of how long you’ve been walking. At last, you reach a small, dilapidated door at the end of the hallway, the music louder now, as though it’s coming from just beyond. Do you dare open the door, or will you turn back before it’s too late?',
            choices: [],
          },
          {
            id: 6,
            text: 'With a sense of dread, you descend the staircase into the mansion’s cellar, the air growing colder and more oppressive with each step. The stairs creak beneath your weight, and the darkness around you seems to swallow all light. When you reach the bottom, you find yourself in a large, dimly lit chamber filled with old crates and barrels. The smell of dampness and decay is overpowering. As you move forward, you notice something strange — scratch marks on the stone walls, as if something had been trying to claw its way out. Before you can investigate further, you hear a low growl coming from the shadows. You freeze, your heart pounding, as a pair of glowing red eyes slowly emerge from the darkness. Whatever is lurking down here is no ordinary creature. Do you run, or do you face the creature?',
            choices: [],
          },
          {
            id: 7,
            text: 'You cautiously enter the old study, the door creaking softly behind you. The room is filled with dusty, leather-bound books and faded maps, their pages yellowed with age. A large, ornate desk sits in the center, covered in papers and quills, as though the room’s occupant had only just stepped away. As you move further inside, you notice a faint, ghostly figure standing in the corner, its form shifting and indistinct. It seems to be trying to communicate with you, though no words are spoken. Instead, you feel a sense of urgency, as though the figure is trying to warn you of some impending danger. Just as you’re about to ask a question, the figure vanishes, leaving you alone in the study. What will you do next?',
            choices: [],
          },
        ],
      },
      3: {
        title: 'The Space Odyssey',
        author: 'Alex Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Space+Odyssey',
        startNode: {
          id: 1,
          text: 'The vastness of space stretches endlessly before you as your ship, the Starfire Explorer, drifts silently through the void. You’ve been traveling for months, navigating uncharted territories in search of a distant planet rumored to hold the key to humanity’s future survival. The once-vibrant colors of your ship’s interior have dulled, the hum of the engine now a background melody in the symphony of deep space. Suddenly, your navigation panel begins to flash with urgency — an anomaly has been detected. The screen displays a strange signal, unlike anything you’ve encountered before, coming from a nearby star system. It pulses rhythmically, as though beckoning you closer. Should you investigate this mysterious signal, or continue on your original course toward the distant planet?',
          choices: [
            { text: 'Investigate the anomaly', nextNode: 2 },
            { text: 'Stay on course to the distant planet', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'Curiosity gets the better of you, and you redirect the ship toward the source of the signal. As you approach, the anomaly becomes clearer — a massive, metallic structure floating in the void. It’s like nothing youve ever seen, its surface covered in strange symbols and markings that seem ancient, yet far more advanced than human technology. The signal grows stronger, pulsing through your ship’s systems, and you feel an odd sensation — as though something is watching you. Your onboard AI, Luna, advises caution, but you sense an opportunity for discovery. Docking procedures initiate automatically, and the ship is drawn toward an airlock on the structure. Do you suit up and explore this mysterious vessel, or heed Luna’s warning and retreat before it’s too late?',
            choices: [
              { text: 'Suit up and explore the structure', nextNode: 4 },
              { text: 'Retreat to a safe distance', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Deciding to stick to the mission, you chart a course toward the distant planet, leaving the strange signal behind. Hours turn into days as you drift through the stars, the solitude of space weighing heavily on your mind. At long last, the planet Elysium-7 comes into view, a blue and green orb shimmering with promise in the endless black of space. As you prepare for descent, your ship’s scanners pick up something unexpected — signs of artificial life. Structures, far below on the planet’s surface, indicate the presence of a civilization, though none were reported in the mission’s briefing. As your ship enters the atmosphere, turbulence shakes the hull violently, and the systems begin to fail one by one. You manage a rough landing in a dense forest of enormous, glowing trees. As you step outside, your breath is taken away by the sheer beauty of the alien landscape. However, you’re not alone. Strange figures move in the shadows, watching your every step. Will you venture deeper into the forest to discover who — or what — lives here, or attempt to repair your ship and leave this unknown world?',
            choices: [
              { text: 'Explore the alien forest', nextNode: 6 },
              { text: 'Attempt to repair the ship', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'Clad in your space suit, you step through the airlock into the unknown. The structure’s interior is vast and eerily quiet, its walls glowing faintly with an unearthly light. As you walk, your footsteps echo in the silence. The markings you saw from the outside are etched into every surface, swirling in patterns that seem to pulse with life. Suddenly, your comms crackle, and Luna’s voice is distorted. “...malfunction...energy...danger...” But before you can respond, you stumble upon a large chamber filled with advanced technology — and something more. In the center of the room, a floating orb radiates with a soft, pulsating glow, as if it’s alive. It seems to be the source of the signal. You feel an overwhelming urge to touch it, but a warning flashes on your HUD. Luna’s voice, barely audible, urges you to leave immediately. Do you reach for the orb, or heed the warning and make a hasty retreat?',
            choices: [
              { text: 'Touch the glowing orb', nextNode: 8}
            ],
          },
          {
            id: 5,
            text: 'Deciding that the anomaly is too dangerous to risk, you initiate a reverse thrust and pull away from the strange structure. As you watch it disappear from view, the ship’s systems stabilize, and Luna returns to normal. But the encounter leaves you with a nagging feeling that something was left unexplored. Days later, your course takes you near the Icarus Nebula, a beautiful, swirling cloud of gas and light. As you pass through, your sensors pick up a faint signal — much weaker, but eerily similar to the one from the metallic structure. Luna warns that the nebula’s radiation could interfere with your systems, but you’re tempted to investigate. Will you enter the nebula and follow the signal, or stay on your safe path?',
            choices: [],
          },
          {
            id: 6,
            text: 'You decide to venture deeper into the alien forest, drawn by the strange beauty of the planet. The trees hum with energy, their bark glowing softly in the twilight. As you move through the dense foliage, you notice intricate symbols carved into the trunks — a language you don’t understand. Suddenly, a figure emerges from the shadows — tall, slender, and shrouded in a cloak of light. It moves gracefully toward you, its eyes glowing with intelligence. You instinctively raise your hand in greeting, but the figure pauses. Without a word, it gestures toward a distant structure — a temple-like building glowing on the horizon. The choice is clear: do you follow this being to the temple, or try to communicate here in the forest?',
            choices: [
            ],
          },
          {
            id: 7,
            text: 'With danger lurking in the shadows of the forest, you decide to return to the ship and attempt repairs. The damage is extensive, and it will take time to get the systems back online. As you work, strange noises echo from the forest, but nothing approaches the ship. Hours pass, and you manage to repair the main systems. Just as you prepare to initiate takeoff, the ground shakes violently, and a beam of light erupts from the forest toward the sky. Something has been awakened. The ship’s sensors detect massive energy signatures converging on your location. You have to act quickly. Do you take off immediately, or investigate the source of the disturbance?',
            choices:[],
          },
          {
            id: 8,
            text: 'Against your better judgment, you reach out and touch the glowing orb. The moment your fingers make contact, a surge of energy courses through you, overwhelming your senses. For a brief moment, your mind is flooded with images — galaxies spiraling into chaos, alien civilizations rising and falling, and a presence far beyond your understanding. The orb pulses violently, and the structure around you begins to tremble. Luna’s voice, now clear and panicked, screams for you to retreat. But it’s too late. The orb shatters, releasing a blinding light that engulfs the chamber. When the light fades, you find yourself back on your ship, disoriented and confused. The structure is gone, and the ship’s systems are completely offline. As you attempt to regain control, a message flashes on your screen: “They are coming.” What will you do now?',
            choices: [],
          }
        ],
      },
      4: {
        title: 'The Lost City',
        author: 'Emily Brown',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Lost+City',
        startNode: {
          id: 1,
          text: 'Deep in the heart of the Amazon rainforest, you stand at the edge of a long-forgotten civilization. The dense jungle surrounds you, the air thick with humidity, and the sound of wildlife reverberates all around. The legends spoke of a city lost to time, buried beneath layers of vegetation, its treasures untouched for centuries. Now, after weeks of trekking through the unforgiving wilderness with only a worn-out map and a compass, you’ve found it — Elara, the Lost City of Gold. Ancient stone walls rise before you, overgrown with vines and moss, their surfaces adorned with intricate carvings that tell stories of gods, kings, and untold riches. A massive stone archway leads into the city’s heart, but the jungle has reclaimed much of the path. To your left, a crumbling stone bridge spans a deep ravine, leading to what looks like a hidden temple. You have a choice to make — venture through the archway into the city’s core or cross the precarious bridge to investigate the temple.',
          choices: [
            { text: 'Enter the heart of the lost city', nextNode: 2 },
            { text: 'Cross the bridge to the temple', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'With a sense of awe and anticipation, you step through the grand archway and into the heart of the Lost City. The sight that greets you is breathtaking — towering stone structures loom above, some partially collapsed, while others stand tall, defying the centuries. At the center of the city, a massive ziggurat rises, its steps covered in thick vines, leading up to what appears to be a grand chamber at the top. As you walk, you notice strange markings on the ground, some forming intricate geometric patterns. The air feels heavy, almost charged with energy, as though the city itself is alive. Suddenly, the ground beneath your feet shifts, and you hear the sound of stone grinding against stone. A section of the path ahead collapses, revealing a deep pit lined with sharp spikes. It’s clear that the city was built with more than just grandeur in mind — it was designed to protect its secrets. Do you continue toward the ziggurat, or explore the safer side paths that wind around the ruins?',
            choices: [
              { text: 'Head toward the ziggurat', nextNode: 4 },
              { text: 'Explore the side paths around the ruins', nextNode: 5 },
            ],
          },
          {
            id: 3,
            text: 'Your heart races as you step onto the ancient stone bridge, its surface worn smooth by the passage of time. Below, the ravine stretches into darkness, the sound of rushing water echoing from the depths. The bridge sways slightly with each step, and you can’t help but glance nervously at the crumbling edges. As you reach the midpoint, a sudden gust of wind whips through the ravine, causing the bridge to creak ominously. For a moment, it feels as though the whole structure might collapse beneath you. But then, the wind dies down, and you reach the other side, where the temple looms before you. Its entrance is flanked by two massive stone statues, their faces weathered but still imposing, as though they’re guarding the secrets within. A faint golden glow emanates from the temple’s dark interior. Do you dare to enter the temple and uncover its mysteries, or head back across the bridge to explore the city further?',
            choices: [
              { text: 'Enter the temple', nextNode: 6 },
              { text: 'Return to the city ruins', nextNode: 7 },
            ],
          },
          {
            id: 4,
            text: 'Ignoring the danger of the collapsed pathway, you press forward toward the towering ziggurat. Each step brings you closer to the ancient structure, and as you ascend its stone steps, you can feel the weight of history pressing down on you. The carvings along the walls become more elaborate as you climb, depicting scenes of rituals, offerings, and battles long forgotten. At the top, a massive stone door stands closed, flanked by two colossal statues of jaguar-like creatures. The door is adorned with a large golden emblem, its surface polished to a shine despite the centuries. It looks as though it hasn’t been touched in ages, yet the faint hum of energy seems to radiate from it. You know this must be the entrance to the city’s treasure vault — or perhaps something far more dangerous. You could attempt to open the door, or search for another way in by circling the ziggurat.',
            choices: [],
          },
          {
            id: 5,
            text: 'Deciding to avoid the dangers of the main path, you veer off toward the side passages that wind around the city. These paths are narrower and more overgrown, but they offer a quieter, safer exploration of the ancient ruins. As you walk, you come across small alcoves and hidden chambers, each one filled with relics of the past — ornate pottery, carved idols, and remnants of tools once used by the inhabitants of this lost civilization. In one chamber, you find an ancient map etched into the stone wall, showing the layout of the city. It highlights several key locations, including what appears to be a hidden passage beneath the city, leading to a chamber deep underground. Intrigued, you could follow the map to this hidden passage or continue exploring the surface ruins.',
            choices: [
              { text: 'Follow the map to the hidden passage', nextNode: 8 },
            ],
          },
          {
            id: 6,
            text: 'The air inside the temple is thick and musty, the scent of ancient incense still lingering in the stone halls. Dim light from the golden glow illuminates the intricate carvings along the walls, depicting scenes of gods and offerings, as well as warnings written in an ancient script. As you move deeper into the temple, you notice the architecture shifts — the carvings become more ominous, showing images of sacrifices and strange, shadowy figures. At the heart of the temple, you find a large chamber with a massive stone altar. On the altar rests a glowing artifact, its surface etched with runes that seem to pulse with energy. You feel an overwhelming urge to reach for the artifact, but something in the air tells you it’s not that simple. Do you take the artifact, or investigate the rest of the temple first?',
            choices: [],
          },
          {
            id: 7,
            text: 'Rather than risk opening the massive door, you decide to circle the ziggurat in search of another way in. As you walk along its base, you find a series of smaller chambers built into the sides of the structure, each one sealed with heavy stone doors. Some of the doors bear the same golden emblem as the main vault, while others are plain and unmarked. One door, partially ajar, catches your attention. The air around it feels cooler, as though something is drawing you in. You could enter through this open door, or continue searching the exterior of the ziggurat for another entrance.',
            choices: [],
          },
          {
            id: 8,
            text: 'Guided by the ancient map, you make your way to a hidden passage beneath the city. The entrance is cleverly concealed behind a collapsed section of wall, but after some careful excavation, you find a narrow stairway leading deep into the earth. The passage is dark, and the air grows colder as you descend, but you press on, driven by the promise of discovery. Eventually, you reach a massive underground chamber, its walls lined with shimmering gold and precious gems. In the center of the room, a large stone pedestal holds a golden idol, its eyes inlaid with sparkling emeralds. It’s a treasure beyond imagination, but the room feels wrong, as though something terrible is about to happen. Do you take the idol, or retreat before triggering whatever traps may be in place?',
            choices: [],
          }
        ],
    
      },
      5: {
        title: 'The Underwater Adventure',
        author: 'Chris Taylor',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Underwater+Adventure',
        startNode: {
          id: 1,
          text: 'You dive into the ocean to explore a sunken ship.',
          choices: [
            { text: 'Swim towards the ship', nextNode: 2 },
            { text: 'Explore the coral reef nearby', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You find the ship filled with treasure.',
            choices: [{ text: 'Take the treasure', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You find a hidden cave in the reef.',
            choices: [{ text: 'Enter the cave', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'The treasure is cursed, and strange things start happening.',
            choices: [],
          },
          {
            id: 5,
            text: 'Inside the cave, you find a pearl of immense value.',
            choices: [],
          },
          {
            id: 6,
            text: 'You safely return to the surface with your findings.',
            choices: [],
          },
        ],
      },
      6: {
        title: 'The Enchanted Forest',
        author: 'Sarah Johnson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Enchanted+Forest',
        startNode: {
          id: 1,
          text: 'You enter a magical forest filled with mystical creatures.',
          choices: [
            { text: 'Follow the fairy', nextNode: 2 },
            { text: 'Explore the hidden cave', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'The fairy leads you to a hidden waterfall.',
            choices: [{ text: 'Drink from the waterfall', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'Inside the cave, you find a glowing crystal.',
            choices: [{ text: 'Touch the crystal', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Drinking from the waterfall grants you magical powers.',
            choices: [],
          },
          {
            id: 5,
            text: 'Touching the crystal transports you to another realm.',
            choices: [],
          },
          {
            id: 6,
            text: 'You encounter a mischievous gnome who offers you a quest.',
            choices: [],
          },
        ],
      },
      7: {
        title: 'The Time Traveler',
        author: 'Michael Anderson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Time+Traveler',
        startNode: {
          id: 1,
          text: 'You discover a time machine hidden in an old attic.',
          choices: [
            { text: 'Travel to the past', nextNode: 2 },
            { text: 'Travel to the future', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'You find yourself in ancient Egypt during the time of the pharaohs.',
            choices: [{ text: 'Explore the pyramids', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'You arrive in a futuristic city filled with advanced technology.',
            choices: [{ text: 'Interact with the robots', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Inside the pyramid, you discover a hidden treasure.',
            choices: [{ text: 'Take the treasure', nextNode: 6 }],
          },
          {
            id: 5,
            text: 'The robots offer you a chance to join their society.',
            choices: [],
          },
          {
            id: 6,
            text: 'Taking the treasure triggers a curse that sends you back to the present.',
            choices: [],
          },
        ],
      },
      8: {
        title: 'The Magical Kingdom',
        author: 'Emma Wilson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Magical+Kingdom',
        startNode: {
          id: 1,
          text: 'You stumble upon a hidden portal that leads to a magical kingdom.',
          choices: [
            { text: 'Meet the wise wizard', nextNode: 2 },
            { text: 'Explore the enchanted forest', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'The wise wizard grants you a magical amulet.',
            choices: [{ text: 'Wear the amulet', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'In the forest, you encounter talking animals.',
            choices: [{ text: 'Listen to the animals', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'Wearing the amulet gives you the ability to fly.',
            choices: [],
          },
          {
            id: 5,
            text: 'The animals reveal a hidden treasure map.',
            choices: [],
          },
          {
            id: 6,
            text: 'You meet the queen of the magical kingdom and become her trusted advisor.',
            choices: [],
          },
        ],
      },
      9: {
        title: 'The Pirate Treasure',
        author: 'David Thompson',
        coverImage: 'https://via.placeholder.com/800x400?text=The+Pirate%27s+Treasure',
        startNode: {
          id: 1,
          text: 'You receive a mysterious map leading to a hidden pirate treasure.',
          choices: [
            { text: 'Sail to the deserted island', nextNode: 2 },
            { text: 'Search for clues in the old tavern', nextNode: 3 },
          ],
        },
        nodes: [
          {
            id: 2,
            text: 'On the island, you encounter a group of friendly dolphins.',
            choices: [{ text: 'Follow the dolphins', nextNode: 4 }],
          },
          {
            id: 3,
            text: 'In the tavern, you find a secret message hidden in a bottle.',
            choices: [{ text: 'Decode the message', nextNode: 5 }],
          },
          {
            id: 4,
            text: 'The dolphins guide you to a hidden underwater cave.',
            choices: [{ text: 'Enter the cave', nextNode: 6 }],
          },
          {
            id: 5,
            text: 'Decoding the message reveals the location of the buried treasure.',
            choices: [],
          },
          {
            id: 6,
            text: 'Inside the cave, you discover the pirate long-lost treasure.',
            choices: [],
          },
        ]
      },


    };

    const story = stories[storyId];
    if (story) {
      setCurrentNode(story.startNode);
      setStoryNodes(story.nodes);
    }
  }, [storyId]);

  const handleChoice = (nextNodeId) => {
    const nextNode = storyNodes.find((node) => node.id === nextNodeId);
    setCurrentNode(nextNode);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
       <Toolbar>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', marginRight: 'auto' }}>Contact</Link>
        
        <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>
       </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 5 }}>
      {currentNode ? (
        <Card sx={{ mt: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {currentNode.text}
            </Typography>

            <List>
              {currentNode.choices.map((choice, index) => (
                <ListItem button key={index} onClick={() => handleChoice(choice.nextNode)}>
                  <ListItemText primary={choice.text} />
                  <ArrowForwardIosIcon />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ) : (
        <Grid container justifyContent="center" sx={{ mt: 5 }}>
          <CircularProgress />
        </Grid>
      )}

      {/* Return to Home Button */}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" color="secondary" startIcon={<HomeIcon />} component={Link} to="/">
          Return to Home
        </Button>
      </Grid>
      </Container>
    </div>
  );
}

export default StoryPage;
