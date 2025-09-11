---
title: 'Fraud_Detection models'
description: Machine learning Model Evaluation.
publishDate: '11/9/2025'
seo:
  image:
    src: '/fraude.jpg'
    alt: Project preview
---

![Project preview](/fraude.jpg)

**Note:** The full project is in [Github](https://github.com/AgustinSilvio/Fraud_Detection).

# **Project Overview:**

Project Summary
1. Data Generation & Import
Synthetic transaction data is generated with realistic fraud patterns, including user demographics, transaction details, device info, and risk factors (e.g., night transactions, high amounts, new accounts, deceased users).
Data is imported and missing values are handled using imputation (median for numeric, mode for categorical).
2. Exploratory Data Analysis (EDA)
Descriptive statistics, missing value checks, and duplicate detection are performed.
Fraud rate and dataset shape are displayed.
Visualizations help understand feature distributions and fraud patterns.
3. Feature Engineering
New features are created: amount-to-income ratio, average product price, high-value transaction flag, new customer flag, unusual device-OS combinations, time-based features (hour, day, month, is_night, is_weekend).
Categorical variables are encoded using one-hot encoding.
Numerical features are scaled with StandardScaler.
4. Data Preparation
Features (x) and target (y) are separated.
Class imbalance is addressed using SMOTE oversampling.
Data is split into training and test sets.
5. Dimensionality Reduction (PCA)
Principal Component Analysis (PCA) is applied to reduce dimensionality and capture most variance with fewer components.
Both the PCA model and transformed data are saved for later use.
6. Model Training
Multiple models are trained and compared:
Random Forest (baseline)
XGBoost
Models are trained using:
PCA components
Standardized data
Original (raw) data (after encoding)
Hyperparameter optimization is performed using GridSearchCV.
7. Model Evaluation
Models are evaluated using metrics: F1-score, ROC-AUC, precision, recall, confusion matrix.
Feature importance is visualized.
Fraud probability distributions are plotted.
8. Prediction Functions
Custom prediction functions are created for both PCA-based and standardized-data models.
Functions accept new transaction data and return fraud probability and classification.
9. Reporting & Visualization
Results are exported to CSV.
Dashboards are built using Panel and Plotly for strategic and analytical views.
Visualizations include KPIs, fraud rates by country, transaction amount vs. fraud, and model performance.
10. Documentation & Sharing
The process is documented for reproducibility and sharing with technical and non-technical audiences.
Notebooks can be exported to HTML/PDF for reporting.
This pipeline enables robust, interpretable, and scalable fraud detection, with clear steps for data handling, modeling, evaluation, and deployment. Let me know if you need a more detailed breakdown of any step or a visual workflow!

## Objectives

- Detect fraudulent transactions using machine learning.
- Build a reproducible pipeline for all stages (data, modeling, evaluation).
- Compare multiple approaches and algorithms.
- Provide interpretable results and clear reporting.
- Document and share the workflow for technical and non-technical audiences



## Technology Stack

Python



**Note:** The project is still in process.
