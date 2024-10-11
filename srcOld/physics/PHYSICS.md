# Physics

- D - Done
- A - Approximate
- J - Implemented in
  [JavaUtils](https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/physics/physics.md)

## 3D

### Distance

|           | Point | Line | Sphere | Rect | Cylinder | Polygon | Ellipsoid | Triangle | Plane |
| :-------- | :---: | :--: | :----: | :--: | :------: | :-----: | :-------: | :------: | :---: |
| Point     |   X   |  X   |   X    |  X   |    X     |         |           |          |       |
| Line      |   _   |  X   |        |      |          |         |           |          |       |
| Sphere    |   _   |  _   |   X    |      |          |         |           |          |       |
| Rect      |   _   |  _   |   _    |  X   |          |         |           |          |       |
| Cylinder  |   _   |  _   |   _    |  _   |          |         |           |          |       |
| Polygon   |   _   |  _   |   _    |  _   |    _     |         |           |          |       |
| Ellipsoid |   _   |  _   |   _    |  _   |    _     |    _    |           |          |       |
| Triangle  |   _   |  _   |   _    |  _   |    _     |    _    |     _     |          |       |
| Plane     |   _   |  _   |   _    |  _   |    _     |    _    |     _     |    _     |       |

### Collision

|           | Point | Line | Sphere | Rect | Cylinder | Polygon | Ellipsoid | Triangle | Plane |
| :-------- | :---: | :--: | :----: | :--: | :------: | :-----: | :-------: | :------: | :---: |
| Point     |   A   |  A   |   X    |  X   |    X     |         |     X     |          |       |
| Line      |   _   |  A   |   X    |  X   |          |         |     X     |          |       |
| Sphere    |   _   |  _   |   X    |  X   |    X     |         |           |          |       |
| Rect      |   _   |  _   |   _    |  X   |          |         |           |          |       |
| Cylinder  |   _   |  _   |   _    |  _   |    X     |         |     J     |          |       |
| Polygon   |   _   |  _   |   _    |  _   |    _     |         |           |          |       |
| Ellipsoid |   _   |  _   |   _    |  _   |    _     |    _    |     J     |          |       |
| Triangle  |   _   |  _   |   _    |  _   |    _     |    _    |     _     |          |       |
| Plane     |   _   |  _   |   _    |  _   |    _     |    _    |     _     |    _     |       |

### Intersection

|           | Point | Line | Sphere | Rect | Cylinder | Polygon | Ellipsoid | Triangle | Plane |
| :-------- | :---: | :--: | :----: | :--: | :------: | :-----: | :-------: | :------: | :---: |
| Point     |       |      |   X    |  X   |    X     |    X    |           |          |       |
| Line      |   _   |      |   X    |  X   |          |         |           |          |       |
| Sphere    |   _   |  _   |        |      |          |         |           |          |       |
| Rect      |   _   |  _   |   _    |      |          |         |           |          |       |
| Cylinder  |   _   |  _   |   _    |  _   |          |         |           |          |       |
| Polygon   |   _   |  _   |   _    |  _   |    _     |         |           |          |       |
| Ellipsoid |   _   |  _   |   _    |  _   |    _     |    _    |           |          |       |
| Triangle  |   _   |  _   |   _    |  _   |    _     |    _    |     _     |          |       |
| Plane     |   _   |  _   |   _    |  _   |    _     |    _    |     _     |    _     |       |
