CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON sample.* TO 'username'@'%';
FLUSH PRIVILEGES;
