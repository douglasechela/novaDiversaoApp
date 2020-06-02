import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'bloodshot',
    loadChildren: () => import('./filmes/bloodshot/bloodshot.module').then( m => m.BloodshotPageModule)
  },
  {
    path: 'blood-and-money',
    loadChildren: () => import('./filmes/blood-and-money/blood-and-money.module').then( m => m.BloodAndMoneyPageModule)
  },
  {
    path: 'trolls2',
    loadChildren: () => import('./filmes/trolls2/trolls2.module').then( m => m.Trolls2PageModule)
  },
  {
    path: 'daddys-girl',
    loadChildren: () => import('./filmes/daddys-girl/daddys-girl.module').then( m => m.DaddysGirlPageModule)
  },
  {
    path: 'think-like-adog',
    loadChildren: () => import('./filmes/think-like-adog/think-like-adog.module').then( m => m.ThinkLikeADogPageModule)
  },
  {
    path: 'me-contro-te',
    loadChildren: () => import('./filmes/me-contro-te/me-contro-te.module').then( m => m.MeControTePageModule)
  },
  {
    path: 'tempo-de-violencia',
    loadChildren: () => import('./filmes/tempo-de-violencia/tempo-de-violencia.module').then( m => m.TempoDeViolenciaPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'greys-anatomy',
    loadChildren: () => import('./series/greys-anatomy/greys-anatomy.module').then( m => m.GreysAnatomyPageModule)
  },
  {
    path: 'prison-break',
    loadChildren: () => import('./series/prison-break/prison-break.module').then( m => m.PrisonBreakPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  },
  {
    path: 'peppa-pig',
    loadChildren: () => import('./desenhos/peppa-pig/peppa-pig.module').then( m => m.PeppaPigPageModule)
  },
  {
    path: 'pica-pau',
    loadChildren: () => import('./desenhos/pica-pau/pica-pau.module').then( m => m.PicaPauPageModule)
  },
  {
    path: 'tom-jerry',
    loadChildren: () => import('./desenhos/tom-jerry/tom-jerry.module').then( m => m.TomJerryPageModule)
  },
  {
    path: 'pernalonga',
    loadChildren: () => import('./desenhos/pernalonga/pernalonga.module').then( m => m.PernalongaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
