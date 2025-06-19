-- Seed garages
INSERT INTO
	garages (id, name)
VALUES
	(1, 'My Garage');

-- Seed vehicles
INSERT INTO
	vehicles (id, garage_id, name, vin, YEAR, make, model)
VALUES
	(1, 1, 'Ruby', '1N6SD16S2PC348125', '1993', 'Nissan', 'Pickup');

-- Seed odometer_logs
INSERT INTO
	odometer_logs (id, vehicle_id, distance, date)
VALUES
	(1, 1, 194363, '2025-06-16Z00:00:00');

-- Seed titles
INSERT INTO
	titles (id, vehicle_id, number, issue_date)
VALUES
	(1, 1, '777274243661108', '2025-01-08Z00:00:00');

-- Seed purchases
INSERT INTO
	purchases (id, vehicle_id, odometer_log_id, seller, buyer, currency, amount, date)
VALUES
	(1, 1, 1, 'Tanner Wayne Barber', 'Andrew Casey Madden', 'USD', 2500.00, '2025-06-16Z00:00:00');

-- Seed parts
INSERT INTO
	parts (id, garage_id, number, name, quantity, notes, added_on, updated_on)
VALUES
	(1, 1, 'MGA46027', 'MicroGuard Round Panel Air Filter', 1, '1 Year Limited Warranty', '2025-06-16Z00:00:00', '2025-06-16Z00:00:00'),
	(2, 1, 'R612530B', 'Ultima Starter - Remanufactured', 1, '$40 core charge. TBR.', '2025-06-16Z00:00:00', '2025-06-16Z00:00:00'),
	(3, 1, 'HP1002', 'K&N Engineering Performance Gold Oil Filter', 1, 'Need to find these in bulk', '2025-06-16Z00:00:00', '2025-06-16Z00:00:00'),
	(4, 1, 'ZFR5FIX-11', 'NGK Iridium IX Plug (4 Pack)', 1, 'Bought on OReilys with code FATHERSDAY for 20% off', '2025-06-16Z00:00:00', '2025-06-16Z00:00:00'),
	(5, 1, '1252815453-1630586352', 'Aluminum Radiator for Nissan D21 1986 - 1994', 1, 'Bought off Amazon', '2025-06-18Z00:00:00', '2025-06-18Z00:00:00');

-- Seed receipts
INSERT INTO
	receipts (id, part_id, vendor, price, rebate, image, date)
VALUES
	(1, 1, 'OReilys', 15.99, null, 'blob://location', '2025-06-16Z00:00:00'),
	(2, 2, 'OReilys', 122.39, 40.00,'blob://location', '2025-06-16Z00:00:00'),
	(3, 3, 'OReilys', 17.99, null, 'blob://location', '2025-06-16Z00:00:00'),
	(4, 4, 'OReilys', 9.59, null,'blob://location', '2025-06-16Z00:00:00'),
	(5, 5, 'Amazon', 60.99, null, 'blob://location2', '2025-06-16Z00:00:00');
