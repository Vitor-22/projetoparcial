import { CustomForm, Logo, CustomP, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';
import logoImg from '../../assets/logo.png';

function Login() {
  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

  return (
    <>
      <FormContainer>
        
        <CustomForm>
        <Logo src={logoImg}/>
          <CustomLabel>Email</CustomLabel>
          <CustomInput type='email' value={email} />

          <CustomLabel>Senha</CustomLabel>
          <CustomInput type='password' value={password}  />

          <CustomInputSubmit class="submit" id="submit" value="Entrar" type="submit" /> 

          <CustomP>Não possui conta? <CustomLink onClick={goToCadastro}>Cadastre-se</CustomLink></CustomP>
        </CustomForm>

      </FormContainer>
      </>
  );
};

export default Login;