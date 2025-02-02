# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook and its dependency array.  The bug causes an infinite loop due to improper management of dependencies leading to unnecessary re-renders.

## Bug Description

The provided `MyComponent` uses `useEffect` to log the current count and run a cleanup function on unmount.  However, the dependency array is missing, causing the effect to run after every render, leading to an infinite render loop and potential application crashes.

## Solution

The solution involves correctly specifying the dependency array. By only including `count` in the dependency array, the effect now only runs when `count` changes, thus fixing the infinite loop.