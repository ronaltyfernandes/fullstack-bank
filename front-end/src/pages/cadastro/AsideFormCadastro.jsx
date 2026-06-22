import { ChartNoAxesCombinedIcon, Landmark, Tags, UserPlus2 } from "lucide-react";
import AuthBackground from "../../ui/backGrondAsideForms";
import ListWithIcon from "../../ui/ListWithIcon";
import ButtonNavWithIcon from "../../ui/ButtonNavWithIcon";
import Logo from "../../ui/Logo";

function AsideFormCadastro() {
  return (
    <aside className="w-1/2 relative overflow-hidden">
      <AuthBackground />

      <div className="relative z-10 h-full flex flex-col justify-center gap-8 p-16">
        <div className="w-full">
          <div className='rounded-full w-40 bg-white mb-5'>
            <Logo/>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Crie seu Cadastro
          </h2>
          <p className="text-white/80">É rápido, fácil e gratuito.</p>
          <p className="text-white/80">
            Comece a organizar suas finanças.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <ListWithIcon
            icon={<ChartNoAxesCombinedIcon />}
            text="Acompanhe seus gastos"
            subText="Visualize relatórios e gráficos."
          />

          <ListWithIcon
            icon={<Landmark />}
            text="Gerencie suas contas"
            subText="Controle suas movimentações."
          />

          <ListWithIcon
            icon={<Tags />}
            text="Organize categorias"
            subText="Classifique receitas e despesas."
          />
        </div>

        <ButtonNavWithIcon
          to="/login"
          icon={<UserPlus2 size={18} />}
          label="Entrar em minha Conta"
          helperText="Rápido, fácil e gratuito."
        />

      </div>
    </aside>
  )
}

export default AsideFormCadastro;