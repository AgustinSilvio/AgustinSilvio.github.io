---
title: 'Bank-customer-segmentation'
description: This project demonstrates customer segmentation for a bank using unsupervised machine learning techniques, specifically K-Means clustering and Principal Component Analysis (PCA). The analysis is performed on a dataset of banking customers, with the goal of identifying distinct customer segments based on their financial behaviors and characteristics.
publishDate: '11/9/2025'
seo:
  image:
    src: '/clasificación de clientes bancarios.jpg'
    alt: Project preview
---

![Project preview](/clasificación de clientes bancarios.jpg)

**Note:** The full project is in [Github](https://github.com/AgustinSilvio/Bank-customer-segmentation).

# Index

- [Bank Customer Segmentation](#bank-customer-segmentation)
   - [Project Structure](#project-structure)
   - [Workflow Overview](#workflow-overview)
   - [Key Technologies](#key-technologies)
   - [How to Run](#how-to-run)
   - [Insights](#insights)
- [Variables](#variables)
- [Correlation matrix](#correlation-matrix)
- [Elbow method](#elbow-method)
- [PCA (Dimensionality Reduction)](#pca-dimensionality-reduction)
- [Scatter Plot of Clusters in Principal Component Space](#scatter-plot-of-clusters-in-principal-component-space)
- [Conclusion](#conclusion)
- [Author](#author)

  
# Bank Customer Segmentation

This project demonstrates customer segmentation for a bank using unsupervised machine learning techniques, specifically K-Means clustering and Principal Component Analysis (PCA). The analysis is performed on a dataset of banking customers, with the goal of identifying distinct customer segments based on their financial behaviors and characteristics.

## Project Structure
- `Bank Customer Segmentation.ipynb`: Main Jupyter notebook containing all code, analysis, and visualizations.
- `Bank_data.csv`: Dataset from Kaggle used for analysis. 

## Workflow Overview
1. **Import Libraries and Data**: Load required Python libraries and the customer dataset. Try '!pip install' if the module of the librarie is not found.
2. **Exploratory Data Analysis (EDA)**: Analyze data structure, handle missing values, detect outliers, and visualize distributions.
3. **Correlation Analysis**: Examine relationships between variables using a correlation matrix.
4. **Data Standardization**: Standardize features for clustering.
5. **K-Means Clustering**:
   - Use the Elbow Method to determine the optimal number of clusters.
   - Apply K-Means to segment customers.
   - Visualize cluster centroids and interpret segment characteristics.
6. **Cluster Insights**: Summarize the main features and behaviors of each customer segment.
7. **Prediction**: Assign cluster labels to each customer and analyze segment distribution.
8. **Dimensionality Reduction (PCA)**: Reduce data to principal components for visualization.
9. **Cluster Visualization**: Display clusters in principal component space.
10. **Conclusion**: Discuss the business value of customer segmentation for banks.

## Key Technologies
- Python (pandas, numpy, seaborn, matplotlib, scikit-learn)
- Jupyter Notebook

## How to Run
1. Open `Bank Customer Segmentation.ipynb` in Jupyter Notebook or VS Code.
2. Ensure `Bank_data.csv` is in the same directory.
3. Run each cell sequentially to reproduce the analysis and visualizations.

## Insights
- The notebook identifies four distinct customer segments based on financial activity and credit behavior.
- Each segment is described in detail, providing actionable insights for marketing, product development, and customer relationship management.

## Variables

| **Variable Name**                    | **Description**                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------|
| `CUST_ID`                           | Unique identifier assigned to each customer                                     |
| `BALANCE`                           | Current balance of the customer's account                                      |
| `BALANCE_FREQUENCY`                | Rate at which the balance is updated or recorded (e.g., monthly or quarterly)   |
| `PURCHASES`                         | Total dollar amount spent on purchases by the customer                         |
| `ONEOFF_PURCHASES`                  | Amount spent on single, non-installment purchases                              |
| `INSTALLMENTS_PURCHASES`           | Total amount spent using installment payment plans                             |
| `CASH_ADVANCE`                      | Total amount of cash borrowed through advances                                 |
| `PURCHASES_FREQUENCY`              | Fraction of months with at least one purchase                                  |
| `ONEOFF_PURCHASES_FREQUENCY`       | Fraction of months with at least one one-off purchase                          |
| `PURCHASES_INSTALLMENTS_FREQUENCY` | Fraction of months with at least one installment purchase                      |
| `CASH_ADVANCE_FREQUENCY`           | Fraction of months with at least one cash advance                              |
| `CASH_ADVANCE_TRX`                 | Number of cash advance transactions                                            |
| `PURCHASES_TRX`                    | Number of purchase transactions                                                |
| `CREDIT_LIMIT`                     | Maximum credit line assigned to the customer                                   |
| `PAYMENTS`                         | Total amount paid by the customer toward their account                         |
| `MINIMUM_PAYMENTS`                | Minimum payment required over the period                                       |
| `PRC_FULL_PAYMENT`                | Percentage of months the customer paid the full balance                        |
| `TENURE`                           | Number of months the customer has been with the bank                           |

## Correlation matrix

<img width="1187" height="1107" alt="Correlation Matrix" src="https://github.com/user-attachments/assets/d43fb726-6c49-4b3c-a606-d1c4d2d910e5" />

From the correlation matrix above, we can observe the following:

The variable 'PURCHASES' is highly correlated with the variables 'PAYMENTS', 'PURCHASES_TRX', 'ONEOFF_PURCHASES_FREQUENCY', 'INSTALLMENTS_PURCHASES', and 'ONEOFF_PURCHASES'.

The variable 'CASH_ADVANCE' is correlated with the variables 'PAYMENTS', 'CASH_ADVANCE_TRX', 'CASH_ADVANCE_FREQUENCY', and 'BALANCE'.

## Elbow method

The Elbow Method is a popular technique used to determine the optimal number of neighbors (k) in the k-Nearest Neighbors (KNN) algorithm.

✨ Purpose
To find the value of k that balances bias and variance for best model performance.

Helps avoid underfitting (low k) and overfitting (high k).

🧪 How it Works
Train the KNN model for a range of k values (e.g. k=1 to 20).

Calculate the error rate (e.g. mean squared error or classification error) for each k.

Plot the error vs. k:

X-axis: Number of neighbors (k)

Y-axis: Error rate

Look for the 'elbow' point in the plot:

This is the point where the error rate starts to flatten or decrease slowly.

It marks a good trade-off: adding more neighbors doesn’t improve performance significantly.

<img width="597" height="455" alt="Elbow method" src="https://github.com/user-attachments/assets/dbb92243-80ba-4647-b2d9-18a4b25542e8" />

At this point, we can notice an elbow in the inertia graph when the number of clusters is 4.Therefore, the optimal number of clusters appears to be 4.

## PCA (Dimensionality Reduction)

🎯 Purpose of PCA
Reduce the number of features in a dataset.

Identify key directions (principal components) where data varies the most.

Improve computational efficiency and model performance.

📊 Cumulative Explained Variance Plot
This plot helps determine how many principal components to keep by showing the cumulative variance each component contributes.

🔍 How It Works
PCA computes a set of principal components ranked by how much variance they capture.

For each component, calculate the explained variance ratio.

Plot cumulative explained variance:

X-axis: Number of components

Y-axis: Total variance explained (in percentage)

📌 Interpreting the Plot
The curve rises as more components are added.

Look for the ‘elbow’ point—where the curve starts flattening.

This point indicates that adding more components yields diminishing returns in explaining variance.

✅ Best Practice
Choose the number of components just before the curve levels off.

This preserves most of the meaningful data variance while reducing dimensions.

<img width="567" height="455" alt="Cumulative Explained Variance Plot" src="https://github.com/user-attachments/assets/ad98a36c-fe00-4c81-bf45-35ecb33ede65" />

Following this chart, we can see that it’s advisable to work with two principal components, since PC1 contributed 27% and PC2 contributed 20% to the total variance. After that, the further you go, the smaller the contribution to overall variance becomes.

## Scatter Plot of Clusters in Principal Component Space

This visualization displays how the identified clusters are distributed across the space defined by the principal components.

It helps reveal separation, overlap, and structure among the clusters in reduced dimensions.

<img width="841" height="833" alt="Scatter Plot of Clusters in Principal Component Space" src="https://github.com/user-attachments/assets/3fefb9b2-7513-4434-a301-dab95715c5f8" />

## Conclusion

By applying machine learning techniques, it is possible to achieve effective categorization of banking customers, enabling a deeper understanding of their behaviors and needs. This segmentation provides a clearer view of the customer base, making it easier to personalize marketing strategies, identify opportunities for product and service improvement, and support more informed business decision-making. In summary, customer segmentation is a powerful tool for any organization in the modern era, allowing for more agile adaptation to changing market demands and delivering a more satisfying experience for customers.




