import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
      padding: 20,
    },
    section: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 10,
    },
    table: {
      display: "table",
      width: "auto",
      margin: "auto",
    },
    tableRow: {
      flexDirection: "row",
      marginBottom: 5,
    },
    tableHeader: {
      backgroundColor: "#DCDCDC",
      fontSize: 14,
      fontWeight: "bold",
      padding: 10,
      flex: 1,
    },
    tableCell: {
      padding: 5,
      flex: 1,
    },
  });

const PdfDocument = ({ products }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Product List</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableHeader}>
              <Text>Product ID</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Product Name</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Product Price</Text>
            </View>
          </View>
          {products.map((product) => (
            <View style={styles.tableRow} key={product._id}>
              <View style={styles.tableCell}>
                <Text>{product._id}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{product.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{product.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
