# Back End (.5hrs)

We expect this portion of the take-home will take about 30 minutes to complete.

### Goals

- Test knowledge of using SQL
- Evaluate approach to vaguely defined problems

### Task Description

You have two tables in a database:

### ourdata.users

| user_id | name   | state |
| ------- | ------ | ----- |
| 1       | Ella   | IL    |
| 2       | Albert | OR    |
| 3       | Lucy   | ME    |
| 4       | Lou    | NY    |
| 5       | Amy    | IA    |
| 6       | Owen   | ME    |
| 7       | Bryce  | ME    |
| 8       | Clara  | NY    |
| 9       | Chad   | OR    |
| 10      | Arny   | FL    |
| 11      | Bob    | FL    |


### ourdata.geo

| state_id | st_code | state_name | population |
| -------- | ------- | ---------- | ---------- |
| 1        | ME      | Maine      | 100        |
| 2        | NY      | New York   | 1000       |
| 3        | IA      | Iowa       | 300        |
| 4        | OR      | Oregon     | 250        |
| 5        | WY      | Wyoming    | 150        |

### Your Mission

Please complete the following tasks. If any of the below are ill-defined, take a guess at the best approach to define any missing parts and indicate those assumptions in comments.

#### Task 1 

Please submit the answers in [this file](./db/task1.sql). Please write SQL statements that will:

1. Show each user id with each state name and state code.
2. Return the number of users per state.
3. Return the state with the highest proportion of users.

#### Task 2

Fix the SQL in [this file](./db/task2.sql).
