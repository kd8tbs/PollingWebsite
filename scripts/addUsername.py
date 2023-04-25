import json
import random

usernames = ["PurpleDino7", "BaconLover42", "KaylaWrites", "3l3ctr0n1c$", "RumAndMonkey", "SunnyDayz", "AlexTheGreat", "GamerGurl88", "SnowyOwl", "ZiggyStardust", "LeoTheLion", "CookieMonster", "JazzFan101", "LunaMoon", "HarryPotterFan", "GreenThumb", "TravelBug", "PizzaParty", "RockStar", "BookWorm", "FitnessFreak", "CoffeeAddict", "DreamCatcher", "ArtLover", "MusicManiac", "FlowerPower", "RainbowDash", "NinjaTurtle", "PandaBear", "CrazyCatLady", "DogLover123", "Sk8erBoi", "SweetiePie", "FunnyGuy", "HappyCamper", "SparkleQueen", "MagicMike", "SuperHero", "WonderWoman", "ChillVibes", "FireCracker", "IceQueen", "SunshineSmile", "BlueSkye", "RedRose", "SilverFox", "GoldDigger", "BlackPearl", "PinkLady", "LuckyStar"]

with open('/home/kd8tbs/git/PollingWebsite/frontend/src/records.json', 'r') as f:
    data = json.load(f)

for poll in data['polls']:
    poll['userName'] = random.choice(usernames)

with open('/home/kd8tbs/git/PollingWebsite/frontend/src/records.json', 'w') as f:
    json.dump(data, f)