import { Typography, Divider } from 'antd';
import TodoList from '../components/TodoList';
import Filters from '../components/Filters';
import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from "react-redux";
import TodoSlice from '../components/TodoList/TodoSlice';
const { Title } = Typography;

export default function Home({ props }) {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}
export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const dispatch = useDispatch();
  dispatch(
    TodoSlice.actions.getMe()
  );
  return {
    props: {

    }
  }
}
