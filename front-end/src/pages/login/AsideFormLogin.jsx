import React from 'react'
import ListWithIcon from '../../ui/ListWithIcon'
import ButtonNavWithIcon from '../../ui/Buttons/ButtonNavWithIcon'
import { ChartNoAxesCombinedIcon, Landmark, Tags, UserPlus2 } from "lucide-react";

import AuthBackground from '../../ui/backGrondAsideForms'
import Logo from '../../ui/Logo';

function AsideFormLogin() {
  return(
    <aside
      className="
        relative
        overflow-hidden
        w-full md:w-1/2
        flex
        flex-col
        justify-center
        gap-6
        p-8 md:p-16
      "
    >
      <AuthBackground />

      <div className="relative z-10 w-full">
        <div className='rounded-full w-40 bg-white mb-4'>
          <Logo />
        </div>

        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 md:mb-4">Crie seu Cadastro</h2>
        <p className="text-white/80 text-sm md:text-base">É rápido, fácil e gratuito.</p>
        <p className="text-white/80 text-sm md:text-base">Comece a organizar suas finanças.</p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 w-full">
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

      <div className="relative z-10">
        <ButtonNavWithIcon
          to='/cadastro'
          icon={<UserPlus2 size={18} />}
          label='Criar minha conta'
          helperText='É rápido, fácil e gratuito.'
        />
      </div>

    </aside>
  )
}

export default AsideFormLogin