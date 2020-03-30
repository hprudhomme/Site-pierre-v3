class LogoController < ApplicationController
    
    def index
        @logos = Logo.all;
        @count = 0;
    end
end
