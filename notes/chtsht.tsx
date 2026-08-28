## Question 1

Total Viscous Drag Force ($F$):

$F = F_1 + F_2$
$= \mu_1 A \frac{V}{y} + \mu_2 A \frac{V}{h-y}$
$= A V \left( \frac{\mu_1}{y} + \frac{\mu_2}{h-y} \right)$

Minimizing Viscous Drag:
To minimize $F$, differentiate with respect to $y$ and set to zero:

$\frac{dF}{dy} = A V \left( -\frac{\mu_1}{y^2} + \frac{\mu_2}{(h-y)^2} \right)$
$= 0$

$\frac{\mu_1}{y^2} = \frac{\mu_2}{(h-y)^2}$
$\implies \frac{h-y}{y} = \sqrt{\frac{\mu_2}{\mu_1}}$

$\frac{h}{y} - 1 = \sqrt{\frac{\mu_2}{\mu_1}}$
$\implies \frac{h}{y} = 1 + \sqrt{\frac{\mu_2}{\mu_1}}$
$= \frac{\sqrt{\mu_1} + \sqrt{\mu_2}}{\sqrt{\mu_1}}$

Relative Position ($y$):

$y = h \frac{\sqrt{\mu_1}}{\sqrt{\mu_1} + \sqrt{\mu_2}}$

---

## Question 2

Upstream Hydrostatic Force ($F_1$):

Density of upstream liquid:
$\rho_1 = 1.45 \times 1000$
$= 1450\text{ kg/m}^3$

Gate height $h_{gate} = 1.2\text{ m}$, width $w = 2.0\text{ m}$, area $A = 2.4\text{ m}^2$.

Distance from free surface to centroid of gate:
$\bar{h}_1 = 1.5 + \frac{1.2}{2}$
$= 2.1\text{ m}$

Force:
$F_1 = \rho_1 g A \bar{h}_1$
$= (1450)(9.81)(2.4)(2.1)$
$= 71,691.48\text{ N}$
$\approx 71.69\text{ kN}$

Center of pressure from top of upstream liquid ($y_{p1}$):

$y_{p1} = \bar{h}_1 + \frac{I_{G}}{A \bar{h}_1}$
$= 2.1 + \frac{\frac{2(1.2)^3}{12}}{(2.4)(2.1)}$
$= 2.1 + \frac{0.288}{5.04}$
$\approx 2.1571\text{ m}$

Height above the hinge at the bottom:

$h_{p1} = (1.5 + 1.2) - 2.1571$
$= 0.5429\text{ m}$

Downstream Hydrostatic Force ($F_2$):

Density of water:
$\rho_2 = 1000\text{ kg/m}^3$

Centroid from water surface:
$\bar{h}_2 = \frac{1.2}{2}$
$= 0.6\text{ m}$

Force:
$F_2 = \rho_2 g A \bar{h}_2$
$= (1000)(9.81)(2.4)(0.6)$
$= 14,126.4\text{ N}$
$\approx 14.13\text{ kN}$

Center of pressure from top of downstream water ($y_{p2}$):

$y_{p2} = \frac{2}{3}(1.2)$
$= 0.8\text{ m}$

Height above the hinge at the bottom:

$h_{p2} = 1.2 - 0.8$
$= 0.4\text{ m}$

**Part (i): Resultant Force & Position**

Net Resultant Force:

$F_{net} = F_1 - F_2$
$= 71,691.48 - 14,126.4$
$= 57,565.08\text{ N}$
$\approx 57.57\text{ kN}\text{ (acting downstream)}$

Location of Resultant Force (Height above bottom hinge $h_{pR}$):

$F_{net} \cdot h_{pR} = F_1 \cdot h_{p1} - F_2 \cdot h_{p2}$

$57,565.08 \cdot h_{pR} = (71,691.48)(0.5429) - (14,126.4)(0.4)$

$57,565.08 \cdot h_{pR} = 38,921.31 - 5,650.56$
$= 33,270.75$

$h_{pR} \approx 0.578\text{ m}\text{ above the bottom hinge}$

**Part (ii): Force Required at the Top to Open Gate ($F_{top}$)**

Taking moments about the bottom hinge:

$\sum M_{\text{hinge}} = 0$
$\implies F_{top} \cdot 1.2 + F_2 \cdot h_{p2} = F_1 \cdot h_{p1}$

$F_{top} \cdot 1.2 = 33,270.75$

$F_{top} \approx 27,725.6\text{ N}$
$\approx 27.73\text{ kN}$

---

## Question 3

Given:

Cylinder mass $m = 10\text{ kg}$, cross-sectional area $A = 0.1\text{ m}^2$

total weight $W = 10 \times 9.81$
$= 98.1\text{ N}$

Liquid A: $S_A = 0.8$
$\implies \rho_A = 800\text{ kg/m}^3$; submerged depth in A: $h_A = 0.1\text{ m}$

Liquid B: $S_B = 1.0$
$\implies \rho_B = 1000\text{ kg/m}^3$; submerged depth in B: $h_B = 0.125\text{ m}$

Gauge Pressure at the Cylinder Bottom:

$P_{bottom} = \rho_A g h_A + \rho_B g h_B$

$P_{bottom} = (800)(9.81)(0.1) + (1000)(9.81)(0.125)$
$= 784.8 + 1226.25$
$= 2011.05\text{ Pa}$
$\approx 2.01\text{ kPa}$

Buoyant Force ($F_B$) & String Tension ($T$):

Total Upward Buoyant Force:

$F_B = P_{bottom} \times A$
$= 2011.05 \times 0.1$
$= 201.105\text{ N}$

Vertical Equilibrium ($\sum F_y = 0$):

$F_B = W + T$
$\implies T = F_B - W$
$= 201.105 - 98.1$
$= 103.005\text{ N}$
$\approx 103.01\text{ N}$

---

## Question 4

**Part (i): Curved Surface Forces**

Parameters: Radius $R = 1.2\text{ m}$, Width $W = 3.0\text{ m}$, Depth to top of quadrant $h_0 = 2.4\text{ m}$.

Horizontal Component ($F_H$):

Projected vertical height $H = 1.2\text{ m}$

Area $A_p = 1.2 \times 3.0$
$= 3.6\text{ m}^2$

Depth to centroid of projected area:
$\bar{h} = 2.4 + \frac{1.2}{2}$
$= 3.0\text{ m}$

$F_H = \rho g A_p \bar{h}$
$= (1000)(9.81)(3.6)(3.0)$
$= 105,948\text{ N}$
$\approx 105.95\text{ kN}$

Line of Action ($y_{pH}$ below surface):

$y_{pH} = 3.0 + \frac{\frac{3.0(1.2)^3}{12}}{3.6 \times 3.0}$
$= 3.0 + \frac{0.36}{10.8}$
$= 3.04\text{ m}\text{ below water surface}$

$(0.64\text{ m below top of curved section, or } 0.56\text{ m above bottom plate})$

Vertical Component ($F_V$):

Weight of water vertically above curved surface:

$V = W \left( (2.4 \times 1.2) + \frac{\pi (1.2)^2}{4} \right)$
$= 3.0 \left( 2.88 + 1.13097 \right)$
$= 12.0329\text{ m}^3$

$F_V = \rho g V$
$= (1000)(9.81)(12.0329)$
$\approx 118,042.8\text{ N}$
$\approx 118.04\text{ kN}\text{ (acting downward)}$

Line of Action ($x_{pV}$ from vertical boundary R-Q):

$\bar{x} = \frac{A_1 x_1 + A_2 x_2}{A_1 + A_2}$
$= \frac{(2.4 \times 1.2)(0.6) + \left(\frac{\pi (1.2)^2}{4}\right)\left(\frac{4(1.2)}{3\pi}\right)}{2.88 + 1.13097}$
$= \frac{1.728 + 0.576}{4.01097}$
$\approx 0.5744\text{ m}$

Resultant Force ($F_R$) & Angle ($\theta$):

Magnitude:

$F_R = \sqrt{F_H^2 + F_V^2}$
$= \sqrt{(105.95)^2 + (118.04)^2}$
$\approx 158.62\text{ kN}$

Direction with horizontal:

$\theta = \tan^{-1}\left(\frac{F_V}{F_H}\right)$
$= \tan^{-1}\left(\frac{118.04}{105.95}\right)$
$\approx 48.11^\circ \text{ below horizontal}$

**Part (ii): Pressure at Bottom of 6m Tank**

Oil Layer: $h_{oil} = 2\text{ m}$

$\rho_{oil} = 0.8 \times 1000$
$= 800\text{ kg/m}^3$

$P_2 = \rho_{oil} g h_{oil}$
$= (800)(9.81)(2)$
$= 15,696\text{ Pa}$
$= 15.70\text{ kPa}$

Water Layer: $h_{water} = 4\text{ m}$

$\rho_{water} = 1000\text{ kg/m}^3$

$P_3 = P_2 + \rho_{water} g h_{water}$
$= 15,696 + (1000)(9.81)(4)$
$= 15,696 + 39,240$
$= 54,936\text{ Pa}$
$= 54.94\text{ kPa}$
