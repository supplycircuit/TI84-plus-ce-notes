Here is the comprehensive list of formulas for RLC circuits (Resistor-Inductor-Capacitor) and resonance, divided into Series, Parallel, and general AC circuit equations.
------------------------------
## 1. Fundamental Component Equations (AC Domain)
Before looking at the combined circuits, these formulas govern how individual elements behave under an alternating current (AC) with angular frequency ω (where ω = 2π f).

* Inductive Reactance ($X_L$): $X_L = \omega L = 2\pi f L$ (Units: Ohms, Ω)
* Capacitive Reactance ($X_C$): $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$ (Units: Ohms, Ω)
* Impedance (Z): Total opposition to AC current. It is a complex number: $\mathbf{Z} = R + jX$ (Units: Ω)
* Admittance (Y): The inverse of impedance: $Y = \frac{1}{Z}$ (Units: Siemens, S or $\mho$)

------------------------------
## 2. Series RLC Circuits
In a series circuit, the current (I) is the same through all components, while voltages add up vectorially.

* Total Impedance Magnitude (Z):
$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}$$ 
* Phase Angle (θ): The angle by which voltage leads or lags current.
$$\tan(\theta) = \frac{X_L - X_C}{R} \implies \theta = \tan^{-1}\left(\frac{\omega L - \frac{1}{\omega C}}{R}\right)$$ 
* Total Voltage (V): $V = \sqrt{V_R^2 + (V_L - V_C)^2}$
* $V_R = I \cdot R$ (In phase with current)
   * $V_L = I \cdot X_L$ (Leads current by 90°)
   * $V_C = I \cdot X_C$ (Lags current by 90°)

------------------------------
## 3. Parallel RLC Circuits
In a parallel circuit, the voltage (V) is the same across all components, while currents add up vectorially.

* Total Admittance Magnitude (Y):
$$Y = \sqrt{\left(\frac{1}{R}\right)^2 + \left(\frac{1}{X_C} - \frac{1}{X_L}\right)^2} = \sqrt{\left(\frac{1}{R}\right)^2 + \left(\omega C - \frac{1}{\omega L}\right)^2}$$ 
* Total Impedance Magnitude (Z): $Z = \frac{1}{Y} = \frac{1}{\sqrt{\left(\frac{1}{R}\right)^2 + \left(\omega C - \frac{1}{\omega L}\right)^2}}$
* Phase Angle (θ):
$$\tan(\theta) = \frac{\frac{1}{X_C} - \frac{1}{X_L}}{\frac{1}{R}} = R \cdot \left(\omega C - \frac{1}{\omega L}\right)$$ 
* Total Current (I): $I = \sqrt{I_R^2 + (I_C - I_L)^2}$
* $I_R = \frac{V}{R}$ (In phase with voltage)
   * $I_C = \frac{V}{X_C}$ (Leads voltage by 90°)
   * $I_L = \frac{V}{X_L}$ (Lags voltage by 90°)

------------------------------
## 4. Resonance Formulas (Series vs. Parallel)
Resonance occurs when the inductive and capacitive effects cancel each other out ($X_L = X_C$), making the circuit purely resistive.

| Parameter | Series Resonance | Parallel Resonance |
|---|---|---|
| Resonant Frequency (f₀) | $f_0 = \frac{1}{2\pi\sqrt{LC}}$ | $f_0 = \frac{1}{2\pi\sqrt{LC}}$ (Ideal condition) |
| Angular Resonant Freq. (ω₀) | $\omega_0 = \frac{1}{\sqrt{LC}}$ | $\omega_0 = \frac{1}{\sqrt{LC}}$ |
| Net Reactance / Susceptance | $X_L - X_C = 0$ | $B_C - B_L = 0$ |
| Total Impedance (Z) | Minimum: Z = R | Maximum: Z = R |
| Total Current (I) | Maximum: $I = \frac{V}{R}$ | Minimum: $I = \frac{V}{R}$ |
| Phase Angle (θ) | 0° (Power Factor = 1) | 0° (Power Factor = 1) |
| Quality Factor (Q) | $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C R} = \frac{1}{R}\sqrt{\frac{L}{C}}$ | $Q = \frac{R}{\omega_0 L} = \omega_0 C R = R\sqrt{\frac{C}{L}}$ |

Note: For a realistic parallel network where the inductor has a small internal resistance $R_L$ in series with it, the practical resonant frequency shifts slightly to:
$$f_0 = \frac{1}{2\pi} \sqrt{\frac{1}{LC} - \frac{R_L^2}{L^2}}$$ 
------------------------------
## 5. Bandwidth and Selectivity Formulas
These formulas apply to both series and parallel resonant circuits to measure how tightly they tune to a specific frequency.

* Bandwidth (BW): The width of the frequency band where the power is at least half of its maximum value.
$$BW = f_2 - f_1 = \frac{f_0}{Q}$$ 
* For Series: $BW = \frac{R}{2\pi L}$ (in Hz) or $\Delta\omega = \frac{R}{L}$ (in rad/s)
   * For Parallel: $BW = \frac{1}{2\pi R C}$ (in Hz) or $\Delta\omega = \frac{1}{RC}$ (in rad/s)
* Half-Power (Cut-off) Frequencies (f₁, f₂): Frequencies at which the power drops to 50% (voltage/current drops to 70.7% or $\frac{1}{\sqrt{2}}$ of maximum).
$$f_1 = f_0 - \frac{BW}{2} \quad \text{and} \quad f_2 = f_0 + \frac{BW}{2} \quad \text{(Approximation for high } Q \ge 10\text{)}$$ 
* Exact geometric mean relation: $f_0 = \sqrt{f_1 \cdot f_2}$

------------------------------
## 6. AC Power Formulas

* True / Active Power (P): $P = V_{\text{rms}} \cdot I_{\text{rms}} \cdot \cos(\theta) = I^2 R$ (Units: Watts, W)
* Reactive Power ($Q_p$): $Q_p = V_{\text{rms}} \cdot I_{\text{rms}} \cdot \sin(\theta) = I^2 X$ (Units: Volt-Amperes Reactive, VAR)
* Apparent Power (S): $S = V_{\text{rms}} \cdot I_{\text{rms}} = I^2 Z = \sqrt{P^2 + Q_p^2}$ (Units: Volt-Amperes, VA)
* Power Factor (PF): $PF = \cos(\theta) = \frac{P}{S} = \frac{R}{Z}$

Would you like me to:

   1. Show you a step-by-step example finding the resonant frequency and bandwidth for a specific set of R, L, C values?
   2. Put together a practice quiz to test your knowledge on these circuit formulas?


