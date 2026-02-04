
# Team Live - Home Assistant Card
## Description
The "Team Live" integration for Home Assistant allows you to get real-time information on football competitions, such as standings, top scorers and championship matchdays.
These are its cards, I decided to separate the cards to give you the choice of what to use and what not to use.

## Installation via HACS
1. Add the repository `https://github.com/Kokhungchan/team-live-card` in HACS as DASHBOARD.
    ![INSTALLATION](images/installazione-git.png)
    
2. Search for "Team Live Card" in HACS and install the integration.
    ![HACS](images/hacs.png)

## Using the cards
---

### Standings
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |
| **hide header**           | Hides the top bar with headers (to save space).                               |
| **max events visible**    | The number of matches visible in the card (excluded from scroll).             |

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

---

### Single Team
---

| **Setting**              | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **sensor**                | Filtering happens automatically, you just need to select it.                   |

---