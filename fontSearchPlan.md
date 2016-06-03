# Library
http://opentype.js.org/glyph-inspector.html
Blue dots are points on a path
Red dots are handles on bezier curve

# global
## x-height
= highest point of x / highest point of A
## stroke thickness
= width of the middle stroke of l or i or j or t
## stroke contrast
= average of a, u, k, t
a = width of the middle of first horizontal stroke of a / width of the middle of the right vertical stroke
u = width of the middle of horizontal bottom stroke / width of the left vertical stroke
k = width of the upper diagonal stroke / width of the lower diagonal stroke
t = width of the horizontal stroke / width of the middle of the vertical stroke

## stress axe
= degree of rotation from vertical of ( a vector from both of the thinnest points of o)

# Serif
## serif, sans, slab
if(width point pairs on I consistent all along) = sans

elseif( vertical distance between first pair of points on serif == vertical distance between last pair of points on serif) = slab

else = serif

## large serif, small serif
= distance from furthest points - distance of the main stroke

## symmetric, asymmetric
left[1] = vertical distance between first pair of points on left serif  
left[2] = vertical distance between last pair of points on left serif

right[1] = vertical distance between first pair of points on right serif  
right[2] = vertical distance between last pair of points on right serif

if (left == right) = symmetric
else = asymmetric


# Maybe for the future
- curve, flat bottom serifs
- bracket
- axes
- ligatures
- aperture size
- counter size
- ball/angled/curved/flat terminals
- a/a
- g/g
- square vs dot i
- Q
- W