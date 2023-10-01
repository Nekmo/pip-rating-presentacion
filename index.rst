
.. toctree::
   :glob:
   :hidden:

   *

.. _intro:

##########
Pip-rating
##########

.. revealjs-section::
    :data-transition: zoom
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px


.. image:: images/logo.*
  :width: 800

.. revealjs-notes::

  Hola a todos.



👋
==

.. revealjs-section::
    :data-transition: convex
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px

.. revealjs-notes::

  Seguramente a muchos os suene este logo de aquí



Log4J
=====

.. revealjs-section::
    :data-transition: zoom
    :data-background-color: #f2e8e7
    :data-background-image: _static/log4j-bg.png
    :data-background-repeat: no-repeat
    :data-background-position: left -200px bottom -200px
    :data-background-size: 600px 600px

.. image:: images/log4j-logo.*
  :width: 1024px

.. revealjs-notes::

  El zero-day de Log4J puso en jaque a medio mundo. Una biblioteca usada por millones de aplicaciones, de forma
  directa o indirecta, la cual no estaba todo lo mantenida que se necesitaba.



Dependencias
============

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #f2e8e7
    :data-background-image: _static/log4j-bg.png
    :data-background-repeat: no-repeat
    :data-background-position: left -200px bottom -200px
    :data-background-size: 600px 600px


.. image:: images/dependency.*
    :height: 600px


.. revealjs-notes::

  Randal Munroe ya avisó sobre este peligro con esta tira de XKCD. Puede haber una dependencia escondida de la que
  dependan muchos grandes proyectos, sin que se mantenga como debería. Y para dar solución a este problema, está
  este proyecto personal. Pero antes, dejadme que me presente.



Sobre mí **Nekmo**
==================

.. _sobre-mi:

+------------------------------------+
|                                    |
| .. image:: images/cara.svg         |
|   :width: 200px                    |
|                                    |
| *Programador Python*               |
|                                    |
+------------------------------------+

.. revealjs-section::
    :data-transition: concave
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px

.. revealjs-notes::

  Soy Juan José, más conocido en redes como Nekmo, programador Python desde hace más de media vida, y autor de esta
  herramienta de software libre.



Pip-rating
==========

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px


.. image:: images/logo.*
  :width: 800

.. revealjs-notes::

  pip-rating es una herramienta que analiza el fichero requirements de vuestro proyecto y os da una puntuación.



Puntuación
==========

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #B3E0DB
    :data-background-gradient: linear-gradient(180deg, #63dacd 0%, #B3E0DB 20%)

.. image:: images/score.*
  :width: 1024px

.. revealjs-notes::

   Esta puntuación, que representa la confianza que aportan vuestras dependencias, se calcula según diferentes
   parámetros.



Criterios puntuación
====================

.. revealjs-section::
    :data-transition: zoom
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px

.. revealjs-fragments::

    * ⌛ **Antigüedad** de la biblioteca
    * 🧑 Tamaño de su **comunidad**
    * 🔧 **Mantenimiento** de la misma
    * 🐞 **Vulnerabilidades** conocidas que afecten
    * 🕵️ Posible **impersonación** de la biblioteca

.. revealjs-notes::

  Como pueden ser (1) su antigüedad, (2) comunidad, (3) mantenimiento, (4) vulnerabilidades conocidas que afecten,
  o (5) la posible impersonación de la biblioteca.



Vista general
=============

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #2B2B2B

.. image:: images/text-view.*
  :width: 550px

.. revealjs-notes::

    Y podréis verlo en diferentes vistas como la vista general, que os ofrece un mayor detalle.


Vista en árbol
==============

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #2B2B2B

.. image:: images/tree-view.*
    :width: 600px

.. revealjs-notes::

    O la vista en árbol, que os permite ver las dependencias de forma jerárquica, entre otras vistas disponibles.



Github Actions
==============

.. revealjs-section::
    :data-transition: zoom
    :data-background-color: #FFFFFF
    :data-background-image: _static/github-bg.svg
    :data-background-repeat: no-repeat
    :data-background-size: 600px 600px
    :data-background-position: left -100px bottom -100px

.. image:: images/github-actions-logo.*
     :width: 613px

.. revealjs-notes::

    Y para usarlo no tenéis ni que instalarlo, porque está disponible en Github Actions.



**GH:** Nekmo/**pip-rating**
============================

.. revealjs-section::
    :data-transition: slide
    :data-background-color: #FFFFFF
    :data-background-image: _static/github-bg.svg
    :data-background-repeat: no-repeat
    :data-background-size: 600px 600px
    :data-background-position: left -100px bottom -100px

.. image:: images/qr-code.*
     :width: 60%


.. revealjs-notes::

    Y aquí tenéis el QR con el proyecto y la dirección arriba.


¡Muchas gracias a todos!
========================

.. revealjs-section::
    :data-background-gradient: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

.. revealjs-notes::

    Y eso es todo, ¡muchas gracias a todos!

**Contactar**
-------------

.. revealjs-section::
    :data-transition: zoom
    :data-background-color: #fff5e7
    :data-background-image: _static/pip-rating-white.svg
    :data-background-repeat: no-repeat
    :data-background-position: left bottom
    :data-background-size: 600px 600px

* **Sitio web:** `nekmo.com <https://nekmo.com>`_
* **Email:** `contacto@nekmo.com <mailto:contacto@nekmo.com>`_
* **Twitter:** `@nekmocom <https://twitter.com/nekmocom>`_
* **Telegram:** `@nekmo <https://t.me/nekmo>`_
* **Jabber:** `nekmo@nekmo.org <xmpp://nekmo@nekmo.org>`_

.. revealjs-notes::

   Aquí tenéis mi contacto si queréis contactar conmigo.
