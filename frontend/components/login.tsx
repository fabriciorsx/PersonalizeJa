'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';

interface LoginContextType {
  isVisible: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin deve ser usado dentro de um LoginProvider');
  }
  return context;
};

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const openLogin = () => setIsVisible(true);
  const closeLogin = () => setIsVisible(false);

  return (
    <LoginContext.Provider value={{
      isVisible,
      openLogin,
      closeLogin
    }}>
      {children}
    </LoginContext.Provider>
  );
};

interface LoginScreenProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const LoginScreen = ({ children, size = 'md' }: LoginScreenProps) => {
  const { isVisible, closeLogin } = useLogin();

  const sizeClasses: Record<string, string> = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <Transition show={isVisible}>
      <Dialog onClose={closeLogin} className="relative z-50">
        <TransitionChild
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-1"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-1"
          >
            <DialogPanel className={`relative bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden transform`}>
  <div className="flex items-center justify-between p-4 border-b">
    <h2 className="text-xl font-semibold text-gray-800">Entrar</h2>
    <button
      onClick={closeLogin}
      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150"
    >
      <X size={20} className="text-gray-500" />
    </button>
  </div>

  <div className="overflow-y-auto max-h-[calc(90vh-8rem)] p-4">
    <form onSubmit={console.log("logando")} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Digite seu email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-yellow-500 focus:border-yellow-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Digite sua senha"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-yellow-500 focus:border-yellow-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors duration-150"
      >
        Entrar
      </button>
    </form>

    {children}
  </div>
</DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginScreen;