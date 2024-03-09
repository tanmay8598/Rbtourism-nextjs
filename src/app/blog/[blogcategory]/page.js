"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/api/client";
import { useRouter } from "next/navigation";

const BlogSpecialCategory = ({ params }) => {
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  const fetchSubCategoryByCategory = async () => {
    const { data } = await apiClient.get("/variation/get-subcategory-by-cat", {
      catId: params?.blogcategory,
    });

    setCategories(data);
  };

  useEffect(() => {
    fetchSubCategoryByCategory();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2>Cities</h2>
      <div className={styles.categoryContainer}>
        {categories?.map((item, id) => {
          return (
            <Link
              key={id}
              className={styles.categoryCard}
              href={`/blog/${params?.blogcategory}/${item?._id}`}
            >
              <div className={styles.card_image}>
                <img src={item?.image} className={styles.cardImg} />
              </div>
              <h3 className={styles.categoryHeading}>{item?.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSpecialCategory;
