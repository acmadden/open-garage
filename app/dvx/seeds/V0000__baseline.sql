-- Seed garages
INSERT INTO
	garages (id, name)
VALUES
	(1, 'My Garage');

-- Seed vehicles
INSERT INTO
	vehicles (id, garage_id, name, vin, year, make, model, title_no, purchase_date)
VALUES
	(1, 1, 'Ruby', '5G2WR54C9XF975310', '1993', 'Nissan', 'Pickup', '766274243771205', '2025-06-16Z00:00:00'),
	(2, 1, 'Diamond', null, '2016', 'Nissan', 'Frontier', null, null);

-- Seed service_visits
INSERT INTO
	service_visits (id, vehicle_id, odometer, notes, date)
VALUES
	(1, 1, '194363', '','2025-01-08Z00:00:00');

-- -- -- Seed resources
-- INSERT INTO resources (id, vehicle_id, link, date) VALUES
-- (1, 1, 'https://www.youtube.com/watch?v=uR9lnJAmqbw&list=LL&index=2&t=5s', NOW()),
-- (2, 1, 'https://www.youtube.com/watch?v=YwVG79uYXQ0&list=LL&index=3&t=899s', NOW()),
-- (3, 1, 'https://www.youtube.com/watch?v=VMxPPp3Tmf4&list=LL&index=3&pp=gAQBiAQB', NOW()),
-- (4, 1, 'https://www.youtube.com/watch?v=pFStYq3ekvg&list=LL&index=6&t=684s', NOW()),
-- (5, 1, 'https://www.youtube.com/watch?v=V6yXRmBx4KQ&list=LL', NOW()),
-- (6, 1, 'https://www.youtube.com/watch?v=V6yXRmBx4KQ&list=LL', NOW());
