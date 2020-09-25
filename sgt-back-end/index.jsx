const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(500).json({
          error: 'We are currently unable to handle your reguest'
        });
      } else {
        res.json(grades);
      }
    });
});

app.post('/api/grades', (req, res, next) => {
  const sql = `
insert into "grades" ("name", "course", "grade")
values ($1, $2, $3)
returning *
`;
  const params = [req.body.name, req.body.course, req.body.grade];
  if (!req.body.name || !req.body.course || !req.body.grade) {
    res.status(400).json({
      error: 'Please provide a valid grade'
    });
  }
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (grade) {
        res.status(201).json({
          success: 'Grade successfully added.'
        });
      } else {
        res.json(grade);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: `${gradeId} must be a positive integer`
    });
  }
  const sql = `
update "grades"
set "name" = $2,
"course" = $3,
"grade" = $4
where "gradeId" = $1
returning *
`;
  const params = [gradeId, req.body.name, req.body.course, req.body.grade];
  if (!req.body.name || !req.body.course || !req.body.grade) {
    res.status(400).json({
      error: 'Please provide a valid grade'
    });
    return;
  }
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: `${gradeId} must be a positive integer`
    });
  }
  const sql = `
delete from "grades"
where "gradeId" = $1
returning *
`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(400).json({
          error: 'Please provide a valid grade'
        });
      } else if (grades.length === 0) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json({
          success: 'The grade has been successfully deleted.'
        });
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
