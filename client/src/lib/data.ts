import { MdLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Collections from "@mui/icons-material/AutoStories";
import { MdOutlinePets } from "react-icons/md";

export const navBarPageRoutes = [
	{
		name: "Home",
		route: "/",
	},
	{
		name: "Pets",
		route: "/pets",
	},
	{
		name: "Leaderboard",
		route: "/leaderboard",
	},
	{
		name: "Memories",
		route: "/memories",
	},
	// {
	// 	name: "Webcam",
	// 	route: "/webcam",
	// },
] as const;

export type ExerciseNameType = (typeof exercises)[number]["name"];

export const exercises = [
	{
		name: "Jumping Jacks",
		duration: 30,
	},
	{
		name: "Wall Sit",
		duration: 30,
	},
	{
		name: "Push Ups",
		duration: 30,
	},
	{
		name: "Abdominal Crunch",
		duration: 30,
	},
	{
		name: "Step Up Onto Chair",
		duration: 30,
	},
	{
		name: "Squat",
		duration: 30,
	},
	{
		name: "Tricep Dip On Chair",
		duration: 30,
	},
	{
		name: "Plank",
		duration: 30,
	},
	{
		name: "High Knees",
		duration: 30,
	},
	{
		name: "Lunge",
		duration: 30,
	},
	{
		name: "Push Up And Rotation",
		duration: 30,
	},
	{
		name: "Side Plank",
		duration: 30,
	},
];
