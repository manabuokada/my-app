import { useState } from 'react';
import { 
  Card,
  CardBody,
  Input,
  Button,
  Stack,
  FormControl,
  Label,
} from "@yamada-ui/react"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに実際の認証ロジックを実装
    // 仮の実装として、ログイン成功時にホームページへ遷移
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <Card maxW="400px" mx="auto" mt="10">
      <CardBody>
        <form onSubmit={handleLogin}>
          <Stack direction="column">
            <FormControl>
              <Label>メールアドレス</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <Label>パスワード</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" w="full">
              ログイン
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginPage; 