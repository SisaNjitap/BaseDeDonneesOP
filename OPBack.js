const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors= require("cors");

const dbFile = "test.db";
const db = new sqlite3.Database(dbFile);
const app = express();
app.use( cors() );

db.serialize( () => {
db.run ('CREATE TABLE IF NOT EXISTS perso (perso_id INTEGER PRIMARY KEY AUTOINCREMENT, perso_name VARCHAR(50) UNIQUE, perso_side VARCHAR(30), perso_crew VARCHAR(50), fruit BOOLEAN, perso_age INTEGER, perso_role VARCHAR(80), perso_hair_color VARCHAR(30), perso_alive BOOLEAN, perso_dream Text(100), perso_hometown VARCHAR(50), perso_weapon VARCHAR (50))');

db.run ('CREATE TABLE IF NOT EXISTS demon_fruit (id INTEGER PRIMARY KEY AUTOINCREMENT, fruit_name VARCHAR(50) , type VARCHAR(50), perso_id INTEGER, FOREIGN KEY(perso_id) REFERENCES perso(perso_id))');

db.run('CREATE TABLE IF NOT EXISTS place (place_id INTEGER PRIMARY KEY AUTOINCREMENT, place_name VARCHAR(50) UNIQUE, sea VARCHAR(50), owner VARCHAR(50))');

db.run('CREATE TABLE IF NOT EXISTS perso_to_place (perso_to_place_id INTEGER PRIMARY KEY AUTOINCREMENT, perso_id INTEGER, place_id INTEGER, FOREIGN KEY (perso_id) REFERENCES perso (perso_id), FOREIGN KEY (place_id) REFERENCES place (place_id))');



db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Monkey D Luffy','Pirate','Mugiwara', true, 19, 'Capitaine','Noir', true,'Roi des Pirates','Royaume de Goa','Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Gol D Roger', 'Pirate', 'Pirates de Roger', 77, 'Capitaine', 'Noir', false, 'Roi des Pirates', 'Loguetown', 'Sabre');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Roronoa Zoro', 'Pirate', 'Mugiwara', false, 21, 'Second', 'Vert', true, 'Meilleur sabreur du monde', 'Shimotsuki', 'Sabre');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Shanks Le Roux', 'Pirate', 'Equipage du Roux', false, 39, 'Capitaine', 'Roux', true, 'Inconnu', 'West Blue', 'Sabre');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Monkey D Dragon', 'Révolutionnaire', 'Armée des révolutionnaires', 55, 'Chef des Révolutionnaires', 'Noir', true, 'Renverser le gouvernement mondial', 'Royaume de Goa', 'Inconnu');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Monkey D Garp', 'Gouvernement Mondial', 'Marine', false, 78, 'Instructeur', 'Blanc', true, 'Voir ses petits fils héros de la Marine', 'Inconnu', 'Poing');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Portgas D Ace', 'Pirates', 'Equipage de Barbe Blanche', true, 20, 'Commandant de la 2e division', 'Noir', false, 'Faire de Barbe Blanche le Roi des Pirates', 'Royaume de Goa', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Nami', 'Pirate', 'Mugiwara', false, 20, 'Navigatrice', 'Roux', true, 'être la première à dessiner la carte du monde', 'Kokoyashi', 'Clima-tact');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Sanji', 'Pirate', 'Mugiwara', false, 21, 'Cuisinier', 'Blond', true, 'Découvrir All Blue', 'Royaume de Germa', 'Jambes');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Usopp', 'Pirate', 'Mugiwara', false, 19, 'Sniper', 'Noir', true, 'Devenir un brave guerrier des mers', 'Village de Sirop', 'Kabuto');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Tony Tony Chopper ', 'Pirate', 'Mugiwara', true, 17, 'Médecin', 'Poil brun', true, 'Trouver un remède contre toutes les maladies', 'Royaume de Drum', 'Corps à corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Franky', 'Pirate', 'Mugiwara', false, 36, 'Charpentier', 'Bleu', true, 'construire le bateau qui fera le tour du monde', 'Water Seven', 'Corps de Cyborg');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Brook', 'Pirate', 'Mugiwara', true, 90, 'Musicien', 'Noir', true, 'Retrouver Lagoon', 'West Blue', 'Epée');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Robin', 'Pirate', 'Mugiwara', true, 30, 'Archéologue', 'Noir', true, 'Lire tous les ponéglyphes', 'Ohara', 'Mains');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Jinbei', 'Pirate', 'Mugiwara', false, 46, 'Timonier', 'Noir', true, 'Egalité entre humains et hommes poissons', 'Ile des hommes poissons', 'Karaté des hommes poissons');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Nefartiti Vivi', 'Princesse', 'Mugiwara', false, 18, 'Princesse', 'Bleu', true, 'Libérer Alabasta', 'Alabasta', 'Sans');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Silver Rayleigh ', 'Pirate', 'Pirates de Roger', false, 78, 'Second', 'Blanc', true, 'Inconnu', 'Inconnu', 'Haki');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Sengoku', 'Gouvernement Mondial', 'Marine', true, 79, 'Inspecteur général', 'Blanc', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Sakazuki', 'Gouvernement Mondial', 'Marine', true, 55, 'Amiral en Chef', 'Noir', true, 'Eradiquer la menace pirate', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Borsalino', 'Gouvernement Mondial', 'Marine', true, 58, 'Amiral', 'Noir', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Kuzan', 'Pirate', 'Equipage de Barbe Noire', true, 49, 'Inconnu', 'Noir', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Edward Newgate', 'Pirate', 'Equipage de Barbe Blanche', true, 72, 'Capitaine', 'Blanc', false, 'Avoir une famille', 'Inconnu', 'Bisento');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Charlotte Linlin', 'Pirate', 'Equipage de Big Mom', true, 68, 'Capitaine', 'Rose', true, 'Reine des Pirates', 'Elbaf', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Kaido', 'Pirate', 'Equipage des Cents Bêtes', true, 'Capitaine', 'Noir', true, 'Mourir', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Marshall D Teach', 'Pirate', 'Equipage de Barbe Noir', true, 40, 'Capitaine', 'Noir', true, 'Roi des Pirates ', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Dracule Mihawk', 'Pirate', 'Aucun', false, 43, 'Capitaine', 'Noir', true, 'Schichibukai', 'Ile de Kuraigna', 'Sabre : Kokuto Yuro');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Crocodile', 'Pirate', 'Boss de Baroque Works', true, 46, 'Ancien roi dAlabasta', 'Noir', true, 'Inconnu', 'Inconnu', 'Crochet');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Gecko Moria', 'Pirate', 'Thriller Bark et de larmée des ombres/Shichibukai', true, 50, ' Commandant de Thriller Bark et de larmée des ombres', 'Noir', true, 'Roi des Pirates', 'Inconnu', 'Les ombres');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Doflamingo', 'Pirate', 'Don Quichotte Doflamingo/Shichibukai', true, 41, 'Ancien roi de Dressrosa', 'Blond', true, 'Inconnu', 'Marijoie', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Bartholomew Kuma', 'Pirate', 'Gouvernement Mondial', true, 47, 'Schichibukai', 'Noir', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Edward Weeble', 'Pirate', 'Aucun','Schichibukai', 'Blond', true, 'Inconnu', 'Inconnu', 'Bisento');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Baggy Le Clown', 'Pirate', 'Pirates de lexpédition', true, 39, 'Capitaine/Schichibukai', 'Noir', true, 'Trouver le trésor du capitaine John', 'Inconnu', 'couteaux');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Boa Hancock', 'Pirate', 'Pirates Kuja', true, 31, 'Impératrice d/Amazon Lily/ Shichibukai', 'Noir', true, 'Se marier à Luffy', 'Amazon Lily', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Trafalgar Law', 'Pirate', 'Equipage du Heart', true, 26, 'Capitaine', 'Noir', true, 'Tuer Doflamingo', 'Ville Blanche', 'Sabre : Kikoku');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Eustache Kidd', 'Pirate', 'Equipage de Kidd', true, 23, 'Capitaine', 'Rouge', true, 'Roi des Pirates', 'Inconnu', 'Ferailles');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)', 'Killer', 'Pirate', 'Equipage de Kidd', 27, 'Second', 'Blond', true, 'Inconnu', 'Inconnu', 'Faux-lame');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','X Drake', 'Pirate', 'Equipage de Kaido', true, 33, 'Capitaine', 'Brun', true, 'Inconnu', 'Ile Minion', 'Epée/Hache');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Capone Bege', 'Pirate', 'Equipage du Fire Tank', true, 42, 'Capitaine', 'Noir', true, 'Roi des Pirates', 'Inconnu', 'Armes à feu');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Jewelry Bonney', 'Pirate', 'Equipage de Bonney', true, 24, 'Capitaine', 'Rose', true, 'Inconnu', 'Inconnu', 'Corps à corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Basil Hawkins', 'Pirate', 'Equipage des cents bêtes', true, 31, 'Capitaine', 'Blond', true, 'Inconnu', 'Inconnu', 'Epouvantail');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Scratchmen Apoo', 'Pirate', 'Equipage des cents bêtes', true, 31, 'Capitaine', 'Noir', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Urouge', 'Pirate', 'Eqiupage des moines dépravés',47, 'Capitaine', 'Noir', true, 'Inconnu', 'Bilca', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Sabo', 'Révolutionnaire', 'Révolutionnaires', true, 22, 'Second de l/armée revolutionnaire', 'Blond', true, 'Renverser le gouvenrment mondial', 'Royaume de Goa', 'Ryusoken');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Ener', 'Autoproclamé Dieu', 'Clan d/Ener', true, 'Autoproclamé Dieu', 'Blond', true, 'Conquérir la lune', 'Bilca', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Kobby', 'Gouvernement Mondial', 'Marine', false, 18, 'Capitaine', 'Violet', true, 'Devinir un héros de la Marine', 'East Down', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Issho', 'Marine', 'Marine', true, 'Amiral', 'Noir', true, 'Abolir les Schichibukai', 'Inconnu', 'Sabre : Shikomizue');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Magellan', 'Gouvernement Mondial', 'Impel Down', true, 47, 'Gardien en Chef d/Impel Down', 'Noir', true, 'Inconnu', 'Inconnu', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Rob Lucci', 'Gouvernement Mondial', 'CP0', true, 30, 'Assassin', 'Noir', true, 'Inconnu', 'Inconnu', 'Hattori');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Charlotte Katakuri', 'Pirate', 'Equipage de Big Mom', true, 48, 'Sweet Commander', 'Noir', true, 'Defendre sa famille', 'Whole Cake Island', 'Corps à Corps');
db.run('INSERT INTO perso (perso_name, perso_side, perso_crew, fruit, perso_age, perso_role, perso_hair_color, perso_alive, perso_dream, perso_hometown, perso_weapon) VALUES (?,?,?,?,?,?,?,?,?,?,?)','Emporio Ivankov', 'Révolutionnaire', 'Révolutionnaires', true, 58, 'Reine des Okamas', 'Violet', true, 'Renverser le gouvernement mondial', 'Kamabacca', 'clin d/oeil');
})
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)', 'Gomu Gomu No Mi', 'Paramecia', '1');
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Mera Mera No Mi', 'Logia', "7");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Hita Hita No Mi', 'Zoan', "11");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Hito Hito No Mi : Daibatsu', 'Zoan', "18",'Yomi Yomi No Mi', 'Paramecia', "13");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Hana Hana No Mi', 'Paramecia', "14");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Magu Magu No Mi', 'Logia', "19");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Pika Pika No Mi', 'Logia', "20");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Hie Hie No Mi', 'Logia', "21");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Gura Gura No Mi', 'Paramecia', "22");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Soru Soru No Mi', 'Paramecia', "23");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Inconnu', 'Zoan Mtyhique', "24");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Gura Gura No Mi/Yami Yami No Mi', 'Paramecia/Logia', "25");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Suna Suna No Mi', 'Logia', "27");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Kage Kage No Mi', 'Paramecia', "28");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Ito Ito No Mi', 'Paramecia', "29");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Nikyu Nikyu No Mi', 'Paramecia', "30");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Bara Bara No Mi', 'Paramecia', "32");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Mero Mero No Mi', 'Paramecia', "33");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Ope Ope No Mi', 'Paramecia', "34");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Inconnu', 'Paramecia', "35");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Ryu Ryu No Mi : modèle Allosaure', 'Zoan Antique', "37");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Shiro Shiro No Mi', 'Paramecia', "38");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Inconnu', 'Paramecia', "39");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Wara Wara No Mi', 'Paramecia', "40");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Inconnu', 'Paramecia', "41");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Mera Mera No Mi', 'Logia', "43");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Goro Goro No Mi', 'Logia', "44");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Inconnu', 'Paramecia', "46");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Doku Doku No Mi', 'Paramecia', "47");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Neko Neko No Mi : modèle Leopard', 'Zoan', "48");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Mochi Mochi No Mi', 'Paramecia', "49");
db.run('INSERT INTO demon_fruit (fruit_name, type, perso_id) VALUES (?,?,?)','Horu Horu No Mi', 'Paramecia', "50");


app.listen(3000, function(error) {
    if (!error) {
        console.log('demon_fruit');
    }
});

app.get('/', function(req, res) {

    db.all('SELECT * FROM demon_fruit', function(error, data) {
        res.send(data);
    });
});