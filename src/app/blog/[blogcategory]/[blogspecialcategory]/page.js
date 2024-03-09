"use client";
import React, { useEffect, useState } from "react";
import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/api/client";
import { useRouter } from "next/navigation";

const BlogCategory = ({ params }) => {
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const fetchSubCategoryByCategory = async () => {
    const { data } = await apiClient.get(
      "/variation/get-specialcategory-by-sub",
      {
        catId: params?.blogspecialcategory,
      }
    );

    setCategories(data);
  };

  useEffect(() => {
    fetchSubCategoryByCategory();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2>Places</h2>
      <div className={styles.categoryContainer}>
        {categories?.map((item, id) => {
          return (
            <Link
              key={id}
              className={styles.categoryCard}
              href={`/blog/${params?.blogcategory}/${params?.blogspecialcategory}/${item?._id}`}
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

export default BlogCategory;
