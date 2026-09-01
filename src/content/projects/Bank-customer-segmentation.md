---
title: "Segmentación de Clientes Bancarios con K-Means y PCA"
title_es: "Segmentación de Clientes Bancarios con K-Means y PCA"
title_en: "Bank Customer Segmentation using K-Means and PCA"
description: "Segmentación no supervisada de clientes financieros mediante clustering K-Means y reducción de dimensionalidad con PCA."
description_es: "Segmentación no supervisada de clientes financieros mediante clustering K-Means y reducción de dimensionalidad con PCA."
description_en: "Unsupervised customer segmentation for banking using K-Means clustering and PCA dimensionality reduction."
publishDate: "2025-11-09"
isFeatured: true
tags: ["Machine Learning", "Python", "K-Means", "PCA", "Banking Analytics"]
---

<div class="lang-es">

**Repositorio:** El proyecto completo con código ejecutable y dataset está disponible en [GitHub](https://github.com/AgustinSilvio/Bank-customer-segmentation).

## Índice de Contenidos

- [Resumen del Proyecto](#resumen-del-proyecto)
  - [Estructura del Repositorio](#estructura-del-repositorio)
  - [Flujo de Trabajo (Workflow)](#flujo-de-trabajo-workflow)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Cómo Ejecutar](#cómo-ejecutar)
- [Diccionario de Variables](#diccionario-de-variables)
- [Matriz de Correlación](#matriz-de-correlación)
- [Determinación de Clústeres: Método del Codo](#determinación-de-clústeres-método-del-codo)
- [Reducción de Dimensionalidad con PCA](#reducción-de-dimensionalidad-con-pca)
- [Visualización de Clústeres en Espacio de Componentes Principales](#visualización-de-clústeres-en-espacio-de-componentes-principales)
- [Conclusiones e Impacto de Negocio](#conclusiones-e-impacto-de-negocio)

---

## Resumen del Proyecto

Este proyecto implementa técnicas de aprendizaje no supervisado (*Unsupervised Machine Learning*) para segmentar la cartera de clientes de una entidad bancaria a partir de sus patrones transaccionales, saldos y comportamiento crediticio, utilizando **K-Means Clustering** y **Análisis de Componentes Principales (PCA)**.

### Estructura del Repositorio
- `Bank Customer Segmentation.ipynb`: Jupyter Notebook principal con todo el pipeline de análisis, limpieza y visualizaciones.
- `Bank_data.csv`: Conjunto de datos transaccionales de clientes bancarios (fuente: Kaggle).

### Flujo de Trabajo (Workflow)
1. **Carga y preparación de datos:** Importación de librerías científicas e ingestión del dataset.
2. **Análisis Exploratorio de Datos (EDA):** Evaluación de estructuras, imputación de valores faltantes y detección de valores atípicos (*outliers*).
3. **Análisis de Correlación:** Identificación de dependencias lineales entre atributos financieros.
4. **Estandarización de Variables:** Escalado de características mediante `StandardScaler` para garantizar que la métrica de distancia euclídea opere de forma homogénea.
5. **Clustering K-Means:**
   - Evaluación de inercia (*Within-Cluster Sum of Squares - WCSS*) mediante el Método del Codo.
   - Segmentación óptima de la cartera en $k=4$ perfiles diferenciados.
6. **Reducción de Dimensionalidad (PCA):** Transformación ortogonal para proyectar la varianza multivariada en 2 componentes principales.
7. **Interpretación y Visualización:** Análisis de centroides y formulación de estrategias de negocio según el perfil de cada segmento.

### Tecnologías Utilizadas
- **Lenguaje:** Python
- **Librerías:** pandas, numpy, seaborn, matplotlib, scikit-learn
- **Entorno:** Jupyter Notebook / VS Code

### Cómo Ejecutar
1. Clonar el repositorio y abrir `Bank Customer Segmentation.ipynb`.
2. Asegurar que `Bank_data.csv` esté ubicado en la misma carpeta raíz.
3. Ejecutar las celdas secuencialmente.

---

## Diccionario de Variables

| Variable | Descripción |
| :--- | :--- |
| `CUST_ID` | Identificador único del cliente bancario |
| `BALANCE` | Saldo promedio mantenido en la cuenta |
| `BALANCE_FREQUENCY` | Frecuencia de actualización/registro del saldo ($0$ a $1$) |
| `PURCHASES` | Monto total acumulado en compras |
| `ONEOFF_PURCHASES` | Monto total en compras efectuadas en un solo pago |
| `INSTALLMENTS_PURCHASES` | Monto total en compras financiadas en cuotas |
| `CASH_ADVANCE` | Monto total retirado mediante adelantos en efectivo |
| `PURCHASES_FREQUENCY` | Frecuencia de compras realizadas ($0$ a $1$) |
| `ONEOFF_PURCHASES_FREQUENCY` | Frecuencia de compras en un solo pago ($0$ a $1$) |
| `PURCHASES_INSTALLMENTS_FREQUENCY` | Frecuencia de compras en cuotas ($0$ a $1$) |
| `CASH_ADVANCE_FREQUENCY` | Frecuencia de uso de adelantos de efectivo ($0$ a $1$) |
| `CASH_ADVANCE_TRX` | Cantidad total de transacciones de adelanto en efectivo |
| `PURCHASES_TRX` | Cantidad total de transacciones de compra |
| `CREDIT_LIMIT` | Límite crediticio asignado a la cuenta |
| `PAYMENTS` | Monto total pagado por el cliente en el período |
| `MINIMUM_PAYMENTS` | Monto mínimo exigido abonado en el período |
| `PRC_FULL_PAYMENT` | Porcentaje de meses en los que se liquidó el saldo total |
| `TENURE` | Antigüedad del cliente con la entidad bancaria (meses) |

---

## Matriz de Correlación

<img width="1187" height="1107" alt="Matriz de Correlación" src="https://github.com/user-attachments/assets/d43fb726-6c49-4b3c-a606-d1c4d2d910e5" />

Principales hallazgos observados en la estructura multivariada:
* La variable `PURCHASES` exhibe una fuerte correlación positiva con `PAYMENTS`, `PURCHASES_TRX`, `ONEOFF_PURCHASES` e `INSTALLMENTS_PURCHASES`, reflejando perfiles de alta rotación comercial.
* La variable `CASH_ADVANCE` se correlaciona marcadamente con `CASH_ADVANCE_TRX`, `CASH_ADVANCE_FREQUENCY` y `BALANCE`, caracterizando usuarios con mayor dependencia de liquidez inmediata y potencial exposición crediticia.

---

## Determinación de Clústeres: Método del Codo

Para determinar el número óptimo de particiones ($k$) en el algoritmo K-Means, se evalúa la inercia global (suma de distancias al cuadrado hacia el centroide de cada clúster) a lo largo de un rango de valores de $k$.

<img width="597" height="455" alt="Método del Codo" src="https://github.com/user-attachments/assets/dbb92243-80ba-4647-b2d9-18a4b25542e8" />

La curva de inercia presenta una inflexión clara en $k=4$, marcando el punto a partir del cual agregar clústeres adicionales genera rendimientos decrecientes en la reducción de varianza intragrupo.

---

## Reducción de Dimensionalidad con PCA

El Análisis de Componentes Principales sintetiza la dimensionalidad del dataset preservando la máxima variabilidad posible.

<img width="567" height="455" alt="Varianza Explicada Acumulada" src="https://github.com/user-attachments/assets/ad98a36c-fe00-4c81-bf45-35ecb33ede65" />

* **Componente 1 (PC1):** Captura el 27% de la varianza total.
* **Componente 2 (PC2):** Captura el 20% de la varianza total.
* **Varianza acumulada:** Los primeros dos componentes explican conjuntamente el 47% de la información del sistema multivariado, permitiendo proyectar y visualizar la separación de grupos en un plano bidimensional.

---

## Visualización de Clústeres en Espacio de Componentes Principales

<img width="841" height="833" alt="Dispersión de Clústeres en Espacio PCA" src="https://github.com/user-attachments/assets/3fefb9b2-7513-4434-a301-dab95715c5f8" />

La proyección bidimensional confirma una clara separación topológica entre los cuatro grupos, permitiendo caracterizar:
1. **Clientes Transaccionales:** Alto volumen de compras y pagos totales continuos.
2. **Usuarios de Adelantos en Efectivo:** Frecuente uso de financiamiento directo y saldos elevados.
3. **Compradores Financiados en Cuotas:** Uso preferencial de esquemas en plazos con baja tasa de mora.
4. **Clientes de Baja Actividad:** Saldos mínimos y operaciones esporádicas.

---

## Conclusiones e Impacto de Negocio

La segmentación no supervisada transforma bases transaccionales masivas en conocimiento accionable para la entidad:
* **Estrategia Comercial:** Permite personalizar campañas de fidelización y calibrar promociones por cuotas o beneficios específicos.
* **Gestión de Riesgo Crediticio:** Identifica de forma temprana segmentos con mayor dependencia de adelantos en efectivo, habilitando ajustes preventivos en líneas de crédito.
* **Eficiencia Operativa:** Facilita la toma de decisiones basada en datos para el diseño y tarificación de nuevos productos financieros.

</div>

<div class="lang-en">

**Repository:** The complete project with executable source code and dataset is available on [GitHub](https://github.com/AgustinSilvio/Bank-customer-segmentation).

## Table of Contents

- [Project Overview](#project-overview)
  - [Repository Structure](#repository-structure)
  - [Workflow Overview](#workflow-overview-1)
  - [Key Technologies](#key-technologies)
  - [How to Run](#how-to-run-1)
- [Feature Dictionary](#feature-dictionary)
- [Correlation Matrix](#correlation-matrix)
- [Optimal Clustering: Elbow Method](#optimal-clustering-elbow-method)
- [Dimensionality Reduction via PCA](#dimensionality-reduction-via-pca)
- [Cluster Visualization in Principal Component Space](#cluster-visualization-in-principal-component-space)
- [Conclusions & Business Impact](#conclusions--business-impact)

---

## Project Overview

This project applies unsupervised machine learning techniques to segment a commercial bank's customer portfolio based on transactional behavior, account balances, and credit utilization, leveraging **K-Means Clustering** and **Principal Component Analysis (PCA)**.

### Repository Structure
- `Bank Customer Segmentation.ipynb`: Main Jupyter notebook containing data engineering, clustering models, and analytical charts.
- `Bank_data.csv`: Transactional banking customer dataset (source: Kaggle).

### Workflow Overview
1. **Data Ingestion & Setup:** Load scientific computing libraries and import tabular records.
2. **Exploratory Data Analysis (EDA):** Inspect distributions, impute missing values, and handle outlier influence.
3. **Correlation Analysis:** Examine linear relationships across account features.
4. **Feature Standardization:** Apply `StandardScaler` to ensure scale-invariant Euclidean distance computation.
5. **K-Means Clustering:**
   - Evaluate Within-Cluster Sum of Squares (WCSS / Inertia) across candidate $k$ values using the Elbow Method.
   - Partition the customer base into $k=4$ distinct behavioural clusters.
6. **Dimensionality Reduction (PCA):** Project high-dimensional features into orthogonal principal components.
7. **Interpretation & Business Translation:** Profile centroid behaviors to derive actionable financial strategies.

### Key Technologies
- **Language:** Python
- **Libraries:** pandas, numpy, seaborn, matplotlib, scikit-learn
- **Environment:** Jupyter Notebook / VS Code

### How to Run
1. Clone the repository and open `Bank Customer Segmentation.ipynb`.
2. Place `Bank_data.csv` in the root workspace directory.
3. Execute all cells sequentially.

---

## Feature Dictionary

| Variable | Description |
| :--- | :--- |
| `CUST_ID` | Unique identification assigned to each customer |
| `BALANCE` | Average account balance maintained by the client |
| `BALANCE_FREQUENCY` | Balance update/recording frequency score ($0$ to $1$) |
| `PURCHASES` | Cumulative dollar expenditure across purchases |
| `ONEOFF_PURCHASES` | Cumulative expenditure in one-off, single transactions |
| `INSTALLMENTS_PURCHASES` | Cumulative expenditure through installment payment plans |
| `CASH_ADVANCE` | Total cash drawn via cash advance facilities |
| `PURCHASES_FREQUENCY` | Overall purchase frequency score ($0$ to $1$) |
| `ONEOFF_PURCHASES_FREQUENCY` | One-off purchase frequency score ($0$ to $1$) |
| `PURCHASES_INSTALLMENTS_FREQUENCY` | Installment purchase frequency score ($0$ to $1$) |
| `CASH_ADVANCE_FREQUENCY` | Frequency score of cash advance usage ($0$ to $1$) |
| `CASH_ADVANCE_TRX` | Total number of cash advance transactions executed |
| `PURCHASES_TRX` | Total number of purchase transactions executed |
| `CREDIT_LIMIT` | Maximum credit line limit assigned to the account |
| `PAYMENTS` | Total payment amount made by the customer |
| `MINIMUM_PAYMENTS` | Minimum mandatory payment amount met |
| `PRC_FULL_PAYMENT` | Percentage of months where the full balance was settled |
| `TENURE` | Account tenure with the financial institution (months) |

---

## Correlation Matrix

<img width="1187" height="1107" alt="Correlation Matrix" src="https://github.com/user-attachments/assets/d43fb726-6c49-4b3c-a606-d1c4d2d910e5" />

Key multivariate observations:
* `PURCHASES` correlates strongly with `PAYMENTS`, `PURCHASES_TRX`, `ONEOFF_PURCHASES`, and `INSTALLMENTS_PURCHASES`, identifying high-volume commercial users.
* `CASH_ADVANCE` shows pronounced correlation with `CASH_ADVANCE_TRX`, `CASH_ADVANCE_FREQUENCY`, and `BALANCE`, pinpointing liquidity-seeking accounts with higher risk exposure.

---

## Optimal Clustering: Elbow Method

To determine the ideal number of clusters ($k$), total inertia (sum of squared distances to cluster centroids) is evaluated across successive cluster counts.

<img width="597" height="455" alt="Elbow Method" src="https://github.com/user-attachments/assets/dbb92243-80ba-4647-b2d9-18a4b25542e8" />

The WCSS curve exhibits an elbow at $k=4$, indicating the optimal trade-off between model simplicity and intra-cluster variance minimization.

---

## Dimensionality Reduction via PCA

Principal Component Analysis condenses high-dimensional features into orthogonal vectors while preserving maximal variance.

<img width="567" height="455" alt="Cumulative Explained Variance" src="https://github.com/user-attachments/assets/ad98a36c-fe00-4c81-bf45-35ecb33ede65" />

* **Principal Component 1 (PC1):** Explains 27% of total variance.
* **Principal Component 2 (PC2):** Explains 20% of total variance.
* **Cumulative Variance:** The first two components preserve 47% of total multivariate information, facilitating two-dimensional spatial projection.

---

## Cluster Visualization in Principal Component Space

<img width="841" height="833" alt="Cluster Scatter Plot in PCA Space" src="https://github.com/user-attachments/assets/3fefb9b2-7513-4434-a301-dab95715c5f8" />

The 2D projection reveals distinct cluster boundaries:
1. **Transactional Spenders:** High purchase frequency and regular full balance payments.
2. **Cash Advance Reliant:** Frequent liquidity borrowing and persistent revolving balances.
3. **Installment Buyers:** Structured recurring purchases with low default indicators.
4. **Inactive / Low-Engagement Accounts:** Minimal balance maintenance and infrequent transactions.

---

## Conclusions & Business Impact

Unsupervised customer segmentation converts raw transactional logs into strategic business insights:
* **Product Personalization:** Tailors credit card benefits, reward programs, and installment promotions to specific behavioral segments.
* **Risk Governance:** Enables early detection of high cash-advance reliance, allowing proactive credit limit adjustments.
* **Data-Driven Operations:** Provides an objective baseline for pricing, capital allocation, and client lifetime value optimization.

</div>