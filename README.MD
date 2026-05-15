What is the difference between Primary Key and Foreign Key?

Ans: A Primary Key is a column or a combination of columns used to uniquely identify every single record in a database table. It must contain completely unique values and can never accept NULL values, with a strict rule of only one primary key per table. On the other hand, a Foreign Key is used to link two tables together by referencing the primary key of another table. Unlike primary keys, foreign keys can accept duplicate and NULL values, and a single table can contain multiple foreign keys to establish relationships with various tables, thereby maintaining referential integrity across the database.

Why is normalization important?

Ans: Normalization is a systematic database design technique used to organize data into multiple tables to minimize redundancy and eliminate undesirable characteristics like insertion, update, and deletion anomalies. By breaking down large, monolithic tables into smaller, isolated ones and defining clear relationships between them, normalization ensures that every piece of data is stored in exactly one place. This prevents data inconsistency—such as updating a user's phone number in one place but having it remain outdated in another—and significantly reduces the storage footprint of the database.

What is a JOIN?

Ans: A JOIN clause in SQL is a mechanism used to combine and retrieve rows from two or more tables simultaneously, based on a related, shared column between them. When querying a normalized database where information is split across multiple tables, joins allow you to stitch that data back together into a single result set. The most common types are Inner Joins, which return only the rows that have matching values in both tables, and Left Joins, which return all records from the primary left table along with any matching records from the right table, filling in NULL values if no match exists.

Difference between SQL and MongoDB?

Ans: The fundamental difference lies in their underlying architecture and data modeling. SQL databases are relational systems that store data in structured, rigid tables with fixed rows and columns, requiring a predefined, strict schema and using SQL for complex, multi-table transactions. MongoDB, by contrast, is a non-relational, document-oriented NoSQL database that stores data as flexible, schema-less JSON-like documents, allowing related data to be nested hierarchically inside a single record. While SQL databases typically scale vertically by upgrading a single server's hardware, MongoDB is designed to scale horizontally across multiple servers out of the box.

What is a composite key?

Ans: A Composite Key is a type of primary key that is composed of two or more columns instead of a single field. It is utilized when no single column in a table possesses enough distinct data to uniquely identify a record, but combining the specific attributes guarantees a completely unique identifier. For example, in a junction table tracking student course enrollments, neither the student_id nor the course_id is unique on its own because a student can take multiple courses and a course has multiple students, but the combined pair of student_id and course_id will always be unique for an individual enrollment.

What is a weak entity?

Ans: In database modeling, a Weak Entity is an entity that cannot be uniquely identified by its own attributes alone and completely relies on its relationship with a parent, or strong entity, to exist. It lacks a primary key of its own and instead uses a partial key, or discriminator, alongside the parent's foreign key to form its identity. A classic example is an account's Dependents table for insurance; a dependent's record has no meaning or independent existence in the system if the primary employee or policyholder record is deleted from the database.

Why do we use constraints?

Ans: We use Constraints in databases to enforce specific rules and restrictions on the data entering a table, ensuring overall data integrity, accuracy, and reliability at the database level. By embedding business logic directly into the schema via constraints like NOT NULL, UNIQUE, and CHECK, the database acts as a final line of defense against corrupted, invalid, or missing data. This prevents bad data from ever being written to disk, regardless of any bugs or missing validation logic in the frontend or backend application code.

Explain many-to-many relationship.

Ans:A Many-to-Many relationship occurs when multiple records in one database table are associated with multiple records in another table. Because relational databases cannot directly map this type of multi-directional link between two tables, developers implement this by introducing a third table known as a Junction Table or bridging table. This junction table breaks down the complex relationship into two separate one-to-many relationships by holding foreign keys that point directly to the primary keys of both parent tables, such as an Enrollments table connecting a Students table and a Courses table.

What is the difference between Clustered and Non-Clustered Index?

Ans: A Clustered Index dictates the literal, physical sorting order of the actual data rows inside a table based on the indexed column, acting much like an alphabetical phone book where the data itself is the index. Because data can only be physically sorted in one way on a disk, a table can only have one clustered index, which is automatically created on the primary key. In contrast, a Non-Clustered Index creates a separate, isolated structure that contains a copy of the indexed columns along with pointers or row locators back to the actual data, operating like an index at the back of a textbook and allowing you to create multiple indexes on a single table.

Explain Database Sharding and Partitioning. When would you use each?

ANs: Partitioning is the process of splitting a massive, unmanageable table into smaller, distinct logical subsets within the exact same database instance and server, making large datasets faster to query while keeping administration centralized. Sharding, on the other hand, is a form of horizontal scaling where data is divided and distributed across entirely separate physical database servers or machines, meaning each server only holds a fraction of the global dataset. You would use partitioning when a single table grows too large for fast indexing but your server still has plenty of CPU and RAM capacity; you would scale up to sharding when your data or transaction volume completely exhausts the hardware limits of a single physical machine.
