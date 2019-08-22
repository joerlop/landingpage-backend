const router = require("express").Router();

const db = require("./emails-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  db.find()
    .then(emails => {
      res.status(200).json(emails);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  db.findByEmail(req.body)
    .then(email => {
      if (email) {
        res.status(400).json({
          message: "Tu correo ya existe en nuestra base de datos. ¡Gracias!"
        });
      } else {
        db.add(req.body)
          .then(email => {
            res.status(201).json({
              message: "Tu correo ha sido guardado exitosamente. ¡Gracias!"
            });
          })
          .catch(err => {
            res.status(500).json({
              message:
                "Hubo un error guardando tu correo. Por favor inténtalo nuevamente."
            });
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message:
          "Hubo un error guardando tu correo. Por favor inténtalo nuevamente."
      });
    });
});

module.exports = router;
