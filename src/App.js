function App() {

  // logic
  console.log('App.js');

  const name = '후츠릿';
  const age = '34';

  const greetingMessage = `안녕하세요. ${name}님, ${age}이시네요
  환영합니다`;
  console.log("🚀 ~ App ~ greetingMessage:", greetingMessage)

  const user = {
    isLoggedIn: true,
    role:'admin',
  };

  // 사용자가 로그인 한 상태이면서 역할이 admin인 경우엔 '관리자 페이지 접근 가능', 아니면 '관리지 페이지 접근 불가능;

  if(user.isLoggedIn && user.role === 'admin'){
    console.log('관리지 페이지 접근 가능')

  } else {
    console.log('관리지 페이지 접근 불가능')
  }

  //view
  return <div>
    Hello world </div>;
}

export default App;
