create table food_seekers (
  food_seeker_id int not null auto_increment,
  account_created date,
  last_updated data,
  org_name varchar(30),
  org_country varchar(25),
  org_state varchar(20),
  org_city varchar(25),
  org_address varchar(50),
  org_zip varchar(5),
  constraint pk_food_seeker primary key (food_seeker_id)
);