// import { create } from "zustand";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_URL;

// const useAuthStore = create((set) => ({
//   user: null,
//   isAuthenticated: false,
//   error: null,
//   isLoading: false,
//   isCheckingAuth: true,

//   register: async (name,email,password) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_URL}/api/auth/register`, {
//         email,
//         password,
//         name,
//       });
//       set({
//         user: response.data.user,
//         isAuthenticated: true,
//         isLoading: false,
//       });
//        const existingUser = await user.findOne({ email });
//           if (existingUser) {
//             return res.json({ success: false, message: "user already exists" }); // ✅ added return
//           }
//     } catch (error) {
//       set({
//         error: error?.response?.data?.message || "Error signing up",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },
//   verifyEmail: async (code) => {
// 		set({ isLoading: true, error: null });
// 		try {
// 			const response = await axios.post(`${API_URL}/verify-email`, { code });
// 			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
// 			return response.data;
// 		} catch (error) {
// 			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
// 			throw error;
// 		}
// 	},
//   checkAuth: async () => {
// 		set({ isCheckingAuth: true, error: null });
// 		try {
// 			const response = await axios.get(`${API_URL}/is-auth`);
// 			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
// 		} catch (error) {
// 			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
// 		}
// 	},
// }));

// export default useAuthStore;
