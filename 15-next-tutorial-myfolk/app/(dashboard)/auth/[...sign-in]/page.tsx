// 在 App Router 裡：
// [slug] → 單一字串參數
// 例如：/auth/444 → { slug: "444" }
// [...slug] → Catch-all 參數（字串陣列）
// 例如：/auth/444/123/hello → { slug: ["444", "123", "hello"] }
// [[...slug]] → Optional catch-all（可以沒有參數）
// 例如：
// /auth → {}
// /auth/444/123 → { slug: ["444", "123"] }

const SignInPage = async ({
  params,
}: {
  params: Promise<{ 'sign-in': string[] }>;
}) => {
  const result = await params;
  const signIn = result['sign-in'];

  console.log(result);
  // console.log(signIn);
  return <div>SignInPage</div>;
};
export default SignInPage;
