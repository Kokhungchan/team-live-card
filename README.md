[![Sample](https://storage.ko-fi.com/cdn/generated/zfskfgqnf/2025-03-07_rest-7d81acd901abf101cbdf54443c38f6f0-dlmmonph.jpg)](https://ko-fi.com/silviosmart)

# Football Live - Home Assistant Card
## Support Me  
If you like my work and want me to continue developing cards, you can buy me a coffee.

[![PayPal](https://img.shields.io/badge/Donate-PayPal-%2300457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=Z6KY9V6BBZ4BN)

Don't forget to follow me on social media:

[![TikTok](https://img.shields.io/badge/Follow_TikTok-%23000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@silviosmartalexa)

[![Instagram](https://img.shields.io/badge/Follow_Instagram-%23E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/silviosmartalexa)

[![YouTube](https://img.shields.io/badge/Subscribe_YouTube-%23FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@silviosmartalexa)


## Video Guide
The video is based on version 2.0.1, in version 2.1.0 the graphical part was introduced.

[Watch the video on YouTube](https://www.youtube.com/watch?v=K-FAJmwsGXs)

## Description
The "Football Live" integration for Home Assistant allows you to get real-time information on football competitions, such as standings, top scorers and championship matchdays.
These are its cards, I decided to separate the cards to give you the choice of what to use and what not to use.

## Installation via HACS
1. Add the repository `https://github.com/Bobsilvio/calcio-live-card` in HACS as DASHBOARD.
    ![INSTALLATION](images/installazione-git.png)
    
2. Search for "Football Live Card" in HACS and install the integration.
    ![HACS](images/hacs.png)

## Using the cards

There are 4 types of cards and I'll show you some examples. I say 4 because one card is the same based on the sensor you select, namely the one for all championship matches or team matches.
---

### Standings
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |
| **hide header**           | Hides the top bar with headers (to save space).                               |
| **max events visible**    | The number of matches visible in the card (excluded from scroll).             |

<img src="images/classifica.png" alt="Standings" width="400">
---

### Championship
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |
| **show finished matches** | Shows finished matches when activated (otherwise only future ones).           |
| **hide header**           | Hides the top bar with headers (to save space).                               |
| **max events visible**    | The number of matches visible in the card (excluded from scroll).             |
| **max events total**      | The total number of matches (included in scroll).                             |

So if I set visible to 5 and total to 10, I'll see only 5 in the card and another 5 by scrolling the card.

<img src="images/campionato.png" alt="Championship" width="400">
---

### All Team Matches
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |
| **show finished matches** | Shows finished matches when activated (otherwise only future ones).           |
| **hide header**           | Hides the top bar with headers (to save space).                               |
| **max events visible**    | The number of matches visible in the card (excluded from scroll).             |
| **max events total**      | The total number of matches (included in scroll).                             |
| **hide matches older**    | Hides matches older than the set number of days.                              |

<img src="images/squadra-tutte.png" alt="All-team-matches" width="400">
---

### Single Team
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |

<img src="images/squadra.png" alt="team" width="400">
---

## Information
This is my first card and there's certainly a lot of work to do. If you like it, you can return the favor by following me on social media:

TikTok: @silviosmartalexa