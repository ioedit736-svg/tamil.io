// Your Supabase Project URL and API Key
// Note: Ensure your project URL ends with '.supabase.co'
const SUPABASE_URL = "https://sb_publishable_XqjGJC4GrRz1DXSKHcHhUw_wEs9K1rZ.supabase.co";
const SUPABASE_KEY = "sb_secret_NXFdv8D0fjImt88fkCFkRQ_Po0---23";

// Create the Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 1. Fetch/Query data from your 'poste' table
async function fetchPosts() {
    let { data, error } = await supabase
        .from('poste')
        .select('*');

    if (error) {
        console.error("Error fetching posts:", error.message);
    } else {
        console.log("Posts Data:", data);
    }
}

// 2. Insert a new record into your 'poste' table
async function addPost(username, postText) {
    let { data, error } = await supabase
        .from('poste')
        .insert([
            { user: username, text: postText }
        ]);

    if (error) {
        console.error("Error inserting post:", error.message);
    } else {
        console.log("Post added successfully:", data);
        fetchPosts(); // Refresh posts after insertion
    }
}

// Call the function to test fetching data
fetchPosts();