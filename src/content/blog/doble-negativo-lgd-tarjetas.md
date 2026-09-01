---
title: "El fenómeno del 'Doble Negativo' en la LGD: ¿Default con saldo a favor?"
title_es: "El fenómeno del 'Doble Negativo' en la LGD: ¿Default con saldo a favor?"
title_en: "The 'Double Negative' Phenomenon in LGD: Default with a Credit Balance?"
description_es: "Cómo el timing transaccional distorsiona la LGD en tarjetas de crédito y subestima la Pérdida Crediticia Esperada (PCE)."
description_en: "How transactional timing distorts credit card LGD and underestimates Expected Credit Loss (ECL)."
publishDate: "2026-03-02"
isFeatured: true
tags: ["Riesgo Crediticio", "LGD", "PCE", "Modelos Cuantitativos", "Finanzas"]
---

<div class="lang-es">

![PCE - Pérdida Crediticia Esperada](/PCE.jpg)

¿Te pusiste a pensar si una tarjeta de crédito puede entrar en default para el banco pero con saldo a favor del cliente?

Suena contradictorio.

### El fenómeno del "doble negativo" en la LGD

En el mundo de las tarjetas de crédito, esta situación se origina principalmente por un tema de **timing transaccional**. 

Imaginemos una cuenta que arrastra marcas de mora de meses anteriores. El motor de riesgo de la entidad ya tiene programada la fecha exacta en la que la cuenta pasará formalmente al estado de **default**.

Justo antes o durante esa fecha, ingresa un movimiento:
* Un pago realizado por el cliente.
* La devolución de una percepción o impuesto.
* La reversión de un consumo mal facturado.

El sistema ejecuta la marca de default según lo programado, pero la cuenta queda transitoriamente con saldo negativo (es decir, saldo a favor del cliente). 

El problema se profundiza cuando pasamos a la ventana de observación posterior y la cuenta cierra manteniendo ese saldo a favor:

$$\text{Saldo al Default} < 0 \quad \text{y} \quad \text{Saldo Final} < 0$$

### La trampa del atajo algorítmico

La teoría de riesgo crediticio prevé la existencia de LGDs negativas (por ejemplo, cuando la entidad percibe intereses punitorios y penalidades que superan lo adeudado originalmente). Por criterio de prudencia, la normativa suele exigir la fijación de un tope inferior (floor), habitualmente de **-100%**.

El verdadero dolor de cabeza aparece cuando el sistema automatiza esto con una regla rígida e incorrecta:

> *"Si ambos saldos son negativos, asignar automáticamente una LGD de -100%."*

#### ¿Por qué es un error crítico?

Si un cliente entra formalmente en default con un saldo a favor de **-$5.000** y al cierre del período de observación ese saldo se reduce a **-$100**, el banco únicamente absorbió un **2%**. El cálculo correcto debería arrojar una LGD del **-2%**.

Al asignarle ciegamente un **-100%**, el motor distorsiona la muestra y **hunde de forma artificial el promedio general de LGD** de la cartera.

### Tratamiento metodológico en validación de modelos

Frente a este hallazgo, en un proceso de validación cuantitativa y auditoría técnica se presentan dos alternativas principales:

1. **Depuración de la muestra (Exclusión por manual):** Si el saldo al momento del default es menor o igual a cero, la Exposición al Momento del Default (EAD) es nula o negativa ($\text{EAD} \le 0$). Al no existir deuda real expuesta a pérdida, lo técnicamente correcto es excluir estos registros de la base de calibración para evitar introducir ruido estadístico.
2. **Corrección de la lógica de cómputo:** Si la definición metodológica exige mantener la cuenta en la muestra, el motor de cálculo debe computar la proporción real observada y nunca forzar un tope fijo artificial.

### Impacto en la Pérdida Crediticia Esperada (PCE)

Llevar este sesgo a la práctica en entornos de alta volatilidad, con tasas nominales e intereses punitorios elevados, representa un riesgo operativo y financiero significativo:

* **Velocidad nominal:** Los saldos se mueven a gran velocidad, amplificando cualquier distorsión en ventanas temporales cortas.
* **Subestimación de provisiones:** Si el motor de riesgo deprime la LGD promedio debido a este sesgo, el cómputo de la **Pérdida Crediticia Esperada (PCE)** resultará inferior al nivel técnico necesario:

$$\text{PCE} = \text{PD} \times \text{EAD} \times \text{LGD}$$

Una LGD artificialmente baja conlleva a constituir menos previsiones contables de las requeridas, subestimando la exposición al riesgo en mercados donde el costo de oportunidad del capital es crítico.

---

### Conclusión

La solidez y consistencia de un modelo de riesgo crediticio no se garantizan únicamente en los manuales teóricos o en los comités de aprobación; se validan en la precisión con la que las reglas de negocio y los casos de borde están implementados en el motor de producción.

</div>

<div class="lang-en">

![ECL - Expected Credit Loss](/PCE.jpg)

Have you ever wondered if a credit card account can technically trigger a default while holding a positive balance in favor of the customer?

It sounds counterintuitive.

### The "Double Negative" Phenomenon in LGD

In the credit card industry, this scenario typically arises from **transactional timing issues**.

Consider an account carrying delinquency markers from previous cycles. The financial institution's risk engine has already scheduled the exact execution date on which the account will formally enter **default status**.

Right before or during that processing window, a transaction occurs:
* A customer payment.
* A tax refund or credit adjustment.
* A dispute reversal from an erroneous charge.

The engine executes the default flag as scheduled, but the account reflects a temporary negative balance (a credit balance in favor of the cardholder).

The challenge deepens when observing the subsequent outcome window, where the account closes while maintaining that credit balance:

$$\text{Balance at Default} < 0 \quad \text{and} \quad \text{Final Balance} < 0$$

### The Algorithmic Shortcut Trap

Credit risk theory accommodates negative Loss Given Default (LGD) metrics (such as when penalty fees and recoveries exceed the initial exposure). Under regulatory prudence guidelines, frameworks typically enforce a minimum floor, commonly set at **-100%**.

The operational issue emerges when automated production engines enforce overly rigid heuristics:

> *"If both balances are negative, assign an automatic LGD of -100%."*

#### Why is this shortcut flawed?

If an account enters default with a credit balance of **-$5,000** and concludes the observation period with **-$100**, the institution only absorbed **2%**. The accurate formula should yield an LGD of **-2%**.

Assigning a flat **-100%** artificially deflates the calibration sample and **drastically depresses the portfolio's aggregate LGD**.

### Methodological Remediation in Model Validation

When auditing and validating risk models, two technical solutions address this distortion:

1. **Calibration Sample Cleansing:** If the balance at default is less than or equal to zero, Exposure at Default is non-existent ($\text{EAD} \le 0$). Because no true credit risk is at stake, the correct statistical practice is removing these records from the calibration pool to eliminate structural noise.
2. **Engine Formula Correction:** If policy mandates retaining the record within the sample, the risk engine must compute the empirical ratio rather than forcing an arbitrary floor.

### Implications for Expected Credit Loss (ECL)

Deploying this flawed logic in high-inflation environments with elevated nominal interest rates compounds operational and balance sheet risk:

* **Nominal Velocity:** Balances shift rapidly over short timeframes, magnifying algorithmic errors.
* **Under-provisioning:** Artificially lowering aggregate LGD directly depresses the **Expected Credit Loss (ECL)** calculation:

$$\text{ECL} = \text{PD} \times \text{EAD} \times \text{LGD}$$

This understates regulatory provisions, leaving institutions undercapitalized precisely where the opportunity cost of capital is highest.

---

### Conclusion

A credit risk model's true robustness is not merely established across theoretical whitepapers or committee manuals; it is determined by how accurately business logic and edge cases are executed within the production risk engine.

</div>